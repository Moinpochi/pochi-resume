import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ ok: false, message: 'Method not allowed' });

  const { name, email, message } = req.body || {};
  if (!name || !email || !message)
    return res.status(400).json({ ok: false, message: 'Missing fields' });

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact
