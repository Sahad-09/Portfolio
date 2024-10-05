'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const country = formData.get('country') as string;
  const phoneCode = formData.get('phoneCode') as string;
  const phone = formData.get('phone') as string;
  const currency = formData.get('currency') as string;
  const budget = formData.get('budget') as string;
  const message = formData.get('message') as string;

  // Combine phone code and phone number, ensuring no duplication and adding a space
  const fullPhoneNumber = phone.startsWith(phoneCode)
    ? phone.replace(phoneCode, `${phoneCode} `)
    : `${phoneCode} ${phone}`;

  // Format the budget with currency and symbol
  const formattedBudget = `${currency} ${budget}`;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
                Name: ${name}
                Email: ${email}
                Country: ${country}
                Phone: ${fullPhoneNumber}
                Budget: ${formattedBudget}
                Message: ${message}
            `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false };
  }
}
