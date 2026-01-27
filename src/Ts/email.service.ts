import emailjs from "emailjs-com";

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      reply_to: email,
      message: message,
      subject: "Nuevo mensaje desde el portafolio",
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};