
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend with API Key from env
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, phone, room, dates, message } = req.body;

        const { data, error } = await resend.emails.send({
            from: 'BADA Guesthouse <onboarding@resend.dev>', // Using default domain for testing
            to: [process.env.RECIPIENT_EMAIL || 'delivered@resend.dev'], // Send to the configured email or default test
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

        console.log('Email sent successfully:', data);
        res.status(200).json({ message: 'Email sent successfully', data });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
