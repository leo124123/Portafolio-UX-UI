import emailjs from "@emailjs/browser";

export async function submitContactForm(
  name: string,
  email: string,
  message: string
) {
  if (!name || !email || !message) {
    throw new Error("Completa todos los campos");
  }

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  } catch {
    throw new Error("Error al enviar el mensaje ❌");
  }
}
