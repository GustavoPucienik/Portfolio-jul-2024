import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm.jsx";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Entre em Contato</h2>

        <p className={styles.subtitle}>
          Tem dúvidas ou precisa de consultoria? Preencha o formulário
          abaixo e retornaremos em breve.
        </p>

        {/* Redes sociais */}
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/gustavo.pucienik/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.instagram}`}
          >
            <FaInstagram />
          </a>

          {/* <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.linkedin}`}
          >
            <FaLinkedin />
          </a> */}

          <a
            href="https://wa.me/+5542998603050"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.whatsapp}`}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Formulário */}
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </section>
  );
}
