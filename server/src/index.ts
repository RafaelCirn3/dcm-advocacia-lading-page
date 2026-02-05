import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3333);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:4200'
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!name || !email || !phone || !message) {
    res.status(400).json({ ok: false, error: 'Campos obrigatorios ausentes.' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: 'Contato do site - DCM Advocacia',
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
    });

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'Falha ao enviar email.' });
  }
});

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
