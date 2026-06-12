import React, { useState } from "react";
import notifySuccess from "../Notify/notifySuccess";
import notifyError from "../Notify/notifyError";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      notifyError("Por favor, informe seu nome.");
      return false;
    }

    if (formData.name.trim().length < 3) {
      notifyError("O nome deve ter pelo menos 3 caracteres.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      notifyError("Informe um email válido.");
      return false;
    }

    if (!formData.message.trim()) {
      notifyError("A mensagem não pode estar vazia.");
      return false;
    }

    if (formData.message.length < 10) {
      notifyError("A mensagem deve conter pelo menos 10 caracteres.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      await response.json();

      if (!response.ok) {
        notifyError("Ocorreu um erro ao enviar a mensagem.");
        return;
      }

      notifySuccess("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      notifyError("Não foi possível enviar a mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Mensagem</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
          className={styles.textarea}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`${styles.button} ${loading ? styles.buttonLoading : ""}`}
      >
        {loading ? (
          <>
            <span className={styles.spinner} />
            Enviando...
          </>
        ) : (
          "Enviar Mensagem"
        )}
      </button>
    </form>
  );
}
