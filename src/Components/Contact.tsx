import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../Ts/contact.logic";
import "./Css/Contact.css"

export default function ContactForm   () {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await submitContactForm(name, email, message);
      setStatus("Mensaje enviado 🚀");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Error al enviar el mensaje ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <motion.form
    id="contact"
      onSubmit={handleSubmit}
      className="glass-card p-8"
      whileHover={{ boxShadow: "0 0 30px rgba(0,255,255,0.15)" }}
    >
      <h2 className="text-3xl font-bold mb-6 glow-text">
        Contanct
      </h2>

      <input
        className="input-glow"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="input-glow mt-4"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        className="input-glow mt-4 h-32"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="btn-glow mt-6 w-full"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
  <p className="mt-4 text-sm opacity-80">{status}</p>
)}

    </motion.form>
  );
}
