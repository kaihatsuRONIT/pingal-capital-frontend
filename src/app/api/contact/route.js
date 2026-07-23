import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { formType, data } = body;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Email to Pingal Capital (internal notification)
    await transporter.sendMail({
        from: `"Pingal Capital" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO,
        subject: `New Submission — ${formType}`,
        html: `
            <h2>${formType}</h2>
            ${Object.entries(data).map(([key, val]) => `<p><b>${key}:</b> ${val}</p>`).join('')}
        `,
    });

    return Response.json({ success: true });
}