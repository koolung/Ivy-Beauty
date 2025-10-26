import nodemailer from 'nodemailer';

// POST /api/contact
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message, recaptchaToken } = data;

    // Validate required fields
    if (!name || !email || !phone || !service || !recaptchaToken) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Skip reCAPTCHA verification in development
    if (process.env.NODE_ENV !== 'development') {
      // Verify reCAPTCHA v3 token with Google
      const secret = process.env.RECAPTCHA_SECRET;
      if (!secret) {
        return new Response(JSON.stringify({ error: 'reCAPTCHA secret not configured' }), { status: 500 });
      }

      const params = new URLSearchParams();
      params.append('secret', secret);
      params.append('response', recaptchaToken);

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
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; margin-top: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Header with gradient background -->
            <div style="background: linear-gradient(135deg, #951e38 0%, #b22a47 100%); padding: 40px 20px; text-align: center;">
              <img src="https://www.ivybeautylashnpmu.ca/images/logo/light_square.svg" alt="Ivy Beauty" style="max-width: 200px; height: auto;">
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <h2 style="margin: 0 0 30px; color: #951e38; font-size: 24px; text-align: center;">New Contact Form Submission</h2>
              
              <div style="background-color: #f8f9fa; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <p style="margin: 0 0 15px;"><strong style="color: #951e38;">Name:</strong> ${name}</p>
                <p style="margin: 0 0 15px;"><strong style="color: #951e38;">Email:</strong> ${email}</p>
                <p style="margin: 0 0 15px;"><strong style="color: #951e38;">Phone:</strong> ${phone}</p>
                <p style="margin: 0 0 15px;"><strong style="color: #951e38;">Service:</strong> ${service}</p>
                <p style="margin: 0;"><strong style="color: #951e38;">Message:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : '—'}</p>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">Sent via Ivy Beauty website contact form</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 12px;">Powered by <a href="https://bedfordwebservices.com">BWS</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"${name} via Contact Form" <${process.env.SMTP_USER}>`,
      replyTo: email, // This allows replying directly to the customer
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
