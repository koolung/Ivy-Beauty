import nodemailer from 'nodemailer';

// POST /api/contact
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message, token } = data;

    // Validate required fields
    if (!name || !email || !phone || !service || !token) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Verify reCAPTCHA v3 token with Google
    const secret = process.env.RECAPTCHA_SECRET;
    if (!secret) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA secret not configured' }), { status: 500 });
    }

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const verifyJson = await verifyRes.json();
    // For v3, Google returns a score (0.0 - 1.0). We'll require a minimum score.
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || '0.5');
    if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < minScore)) {
      return new Response(JSON.stringify({ error: 'Failed reCAPTCHA verification' }), { status: 400 });
    }

    // Prepare email via SMTP (credentials read from env)
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_EMAIL || user;

    if (!host || !user || !pass) {
      return new Response(JSON.stringify({ error: 'SMTP not configured' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const subject = `New contact form: ${service} — ${name}`;
    const html = `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : '—'}</p>
      <hr />
      <p>Sent via website contact form</p>
    `;

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
