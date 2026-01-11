import nodemailer from "nodemailer";

export default async function handler (req, res) {
  const { email, name, message } = req.body;
  console.log("Chegou aqui");

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

    //Email para mim mesmo sobre cliente que entrou em contato
    await transporter.sendMail({
      from: `"Gustavo - Tecnologia da informação" <${process.env.SMTP_USER}>`,
      to: `${process.env.SMTP_USER}`,
      subject: "Contato via site",
      html: ` <p>Nome: ${name}</p> <br/>
              <p>mensagem: ${message}</p>
            `,
    });

    await transporter.sendMail({
      from: `"Gustavo - Tecnologia da informação" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Recebemos sua mensagem ✅",
      html: `
        <p>Olá <strong>${name}</strong>,</p>

        <p>Recebi sua mensagem pelo site e retornarei o mais breve possível.</p>

        <p><strong>Sua mensagem:</strong></p>
        <blockquote>${message}</blockquote>

        <p>Atenciosamente,<br/>
        <strong>Gustavo</strong></p>
      `,
    });

    return res.json({ success: true, message: "Email enviado com sucesso" });
  } catch (error) {
    console.error("Erro Nodemailer:", error);
    return res.status(500).json({
      error: "Erro ao enviar e-mail.",
      detail: error.message,
    });
  }
};