import nodemailer from "nodemailer";

const emailBase = (content) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#041833;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;color:#7aa3d4;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Portfólio</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">Gustavo Pucienik</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#7aa3d4;">Tecnologia da Informação</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#041833;border-radius:0 0 12px 12px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#7aa3d4;">
                Este email foi enviado automaticamente pelo site
                <a href="https://portfolio-gustavo-sepia.vercel.app/sobremim" style="color:#1875E8;text-decoration:none;">portfolio-gustavo-sepia.vercel.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const notifyMeHtml = (name, email, message) => emailBase(`
  <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#1875E8;text-transform:uppercase;letter-spacing:1px;">Novo contato recebido</p>
  <h2 style="margin:0 0 28px;font-size:22px;color:#041833;">Alguém entrou em contato pelo site</h2>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
    <tr>
      <td style="padding:12px 16px;background-color:#f0f4f8;border-radius:8px 8px 0 0;border-bottom:1px solid #e2e8f0;">
        <p style="margin:0;font-size:12px;color:#7aa3d4;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Nome</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#041833;">${name}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:12px 16px;background-color:#f0f4f8;border-radius:0 0 8px 8px;">
        <p style="margin:0;font-size:12px;color:#7aa3d4;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Email</p>
        <a href="mailto:${email}" style="margin:0;font-size:15px;font-weight:600;color:#1875E8;text-decoration:none;">${email}</a>
      </td>
    </tr>
  </table>

  <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#7aa3d4;text-transform:uppercase;letter-spacing:1px;">Mensagem</p>
  <div style="background-color:#f0f4f8;border-left:4px solid #1875E8;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
    <p style="margin:0;font-size:15px;color:#444444;line-height:1.7;white-space:pre-wrap;">${message}</p>
  </div>

  <a href="mailto:${email}" style="display:inline-block;background-color:#1875E8;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;">
    Responder ${name}
  </a>
`);

const confirmationHtml = (name, message) => emailBase(`
  <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#1875E8;text-transform:uppercase;letter-spacing:1px;">Mensagem recebida</p>
  <h2 style="margin:0 0 16px;font-size:22px;color:#041833;">Olá, ${name}!</h2>
  <p style="margin:0 0 24px;font-size:15px;color:#444444;line-height:1.7;">
    Recebi sua mensagem e entrarei em contato o mais breve possível. Fico feliz com seu interesse!
  </p>

  <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#7aa3d4;text-transform:uppercase;letter-spacing:1px;">Sua mensagem</p>
  <div style="background-color:#f0f4f8;border-left:4px solid #1875E8;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
    <p style="margin:0;font-size:15px;color:#444444;line-height:1.7;white-space:pre-wrap;">${message}</p>
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;border-radius:8px;padding:20px 24px;margin-bottom:8px;">
    <tr>
      <td>
        <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#041833;">Gustavo Pucienik</p>
        <p style="margin:0;font-size:13px;">
          <a href="https://portfolio-gustavo-sepia.vercel.app/sobremim" style="color:#1875E8;text-decoration:none;">portfolio-gustavo-sepia.vercel.app</a>
        </p>
      </td>
    </tr>
  </table>
`);

export default async function handler(req, res) {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes.", email, name, message });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Gustavo - Portfólio" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Novo contato de ${name}`,
      html: notifyMeHtml(name, email, message),
    });

    await transporter.sendMail({
      from: `"Gustavo Pucienik" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Recebi sua mensagem!",
      html: confirmationHtml(name, message),
    });

    return res.json({ success: true, message: "Email enviado com sucesso" });
  } catch (error) {
    console.error("Erro Nodemailer:", error);
    return res.status(500).json({
      error: "Erro ao enviar e-mail.",
      detail: error.message,
    });
  }
}
