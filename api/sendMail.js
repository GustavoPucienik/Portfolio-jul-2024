import nodemailer from "nodemailer";

export default async function handler (req, res) {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes." , email: email, name: name, message: message});
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // use true se for porta 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Gustavo - Tecnologia da informação" <${process.env.SMTP_USER}>`,
      to: `${process.env.SMTP_USER}`,
      subject: "Contato via site",
      html: `<p>Nome: ${name}</p> <br/>
              <p>mensagem: ${message}</p>
            `,
    });

    return res.json({ success: true, message: "Email enviado com sucesso" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao enviar e-mail." });
  }
};