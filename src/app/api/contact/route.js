import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let body;

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      body = await request.json().catch(() => ({}));
    }

    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const phone = (body.phone || '').toString().trim();
    const message = (body.message || '').toString().trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Please provide name, email, and message.' }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL || 'allencarrierinst@gmail.com';

    if (!smtpUser || !smtpPass) {
      return new Response(
        JSON.stringify({ error: 'Email is not configured. Set SMTP_USER and SMTP_PASS.' }),
        { status: 400, headers: { 'content-type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `New contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    const info = await transporter.sendMail({
      from: `Website Contact <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      { status: 200, headers: { 'content-type': 'application/json' } }
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send email.' }),
      { status: 500, headers: { 'content-type': 'application/json' } }
    );
  }
}


