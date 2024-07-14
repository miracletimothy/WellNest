import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// Email templates
const templates = {
	welcome: (username: string) => `
    <html>
      <body>
        <h3>Welcome, ${username}!</h3>
        <p>Your account has been successfully created.</p>
        <p>Thank you for joining us!</p>
      </body>
    </html>
  `,
	verification: (username: string, code: string) => `
    <html>
      <body>
        <h3>Welcome, ${username}!</h3>
        <p>Your account is almost ready. Please use the following verification code to complete your registration:</p>
        <code>${code}</code>
      </body>
    </html>
  `,
	// Add more templates as needed
};

export const sendEmail = async (to: string, subject: string, html: string) => {
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to,
		subject,
		html,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent:', info.response);
	} catch (error) {
		console.error('Error sending email:', error);
		throw new Error('Failed to send email');
	}
};

export const sendWelcomeEmail = async (to: string, username: string) => {
	const html = templates.welcome(username);
	await sendEmail(to, 'Welcome to Our App!', html);
};

export const sendVerificationEmail = async (
	to: string,
	username: string,
	code: string,
) => {
	const html = templates.verification(username, code);
	await sendEmail(to, 'Verify Your Account', html);
};
