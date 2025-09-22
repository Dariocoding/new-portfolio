"use server";

import nodemailer from "nodemailer";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Configurar el transporter de nodemailer con las credenciales SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configurar el contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.SMTP_USER, // Enviar a tu mismo correo
      replyTo: formData.email, // Para poder responder directamente al cliente
      subject: `Nuevo mensaje de contacto de ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4f46e5; margin-top: 0;">Información del Cliente</h3>
            <p><strong>Nombre:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Teléfono:</strong> ${formData.phone}</p>
            <p><strong>Servicio solicitado:</strong> ${formData.service}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #4f46e5; margin-top: 0;">Mensaje</h3>
            <p style="line-height: 1.6; color: #374151;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Nota:</strong> Puedes responder directamente a este correo para contactar al cliente.
            </p>
          </div>
        </div>
      `,
      text: `
        Nuevo Mensaje de Contacto
        
        Información del Cliente:
        Nombre: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Teléfono: ${formData.phone}
        Servicio solicitado: ${formData.service}
        
        Mensaje:
        ${formData.message}
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Correo enviado exitosamente",
    };
  } catch (error) {
    console.error("Error enviando correo:", error);
    return {
      success: false,
      message: "Error al enviar el correo. Por favor intenta de nuevo.",
    };
  }
}
