import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, room, dates, message } = req.body;

        const { data, error } = await resend.emails.send({
            from: 'BADA Guesthouse <onboarding@resend.dev>',
            to: [process.env.RECIPIENT_EMAIL || 'delivered@resend.dev'],
            subject: `Nouvelle demande de réservation : ${room}`,
            html: `
        <h1>Nouvelle Demande de Réservation</h1>
        <p><strong>Chambre :</strong> ${room}</p>
        <p><strong>Dates :</strong> ${dates}</p>
        <hr />
        <h2>Détails du Client</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error('Error sending email:', error);
            return res.status(400).json({ error });
        }

        return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (err) {
        console.error('Server error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
