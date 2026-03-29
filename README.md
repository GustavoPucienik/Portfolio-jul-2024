# Portfólio — Gustavo Gomes Pucienik

Portfólio pessoal desenvolvido em React, apresentando minha trajetória profissional, projetos e posts sobre as tecnologias que utilizo no dia a dia.

🔗 **[portfolio-gustavo-sepia.vercel.app](https://portfolio-gustavo-sepia.vercel.app)**

---

## Tecnologias

- **React** — biblioteca de UI
- **React Router v6** — roteamento client-side
- **CSS Modules** — estilização com escopo por componente
- **React Markdown** — renderização de conteúdo dos posts
- **React Toastify** — notificações de feedback
- **Node.js + Nodemailer** — backend para envio de e-mails via formulário de contato

---

## Funcionalidades

- Página inicial com posts sobre tecnologias (Node.js, TypeScript, Java, SQL, nginx, IA e mais)
- Seção de projetos com modal de detalhes — projetos privados exibem descrição sem link externo
- Página "Sobre mim" com roadmap da carreira (2022 → atual)
- Formulário de contato com envio real de e-mail
- Layout responsivo (mobile, tablet e desktop)

---

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar em desenvolvimento
npm start

# Build para produção
npm run build
```

---

## Estrutura principal

```
src/
├── componentes/   # Componentes reutilizáveis (Card, Menu, BotaoPrincipal...)
├── paginas/       # Páginas (Início, SobreMim, Contatos...)
├── json/          # Dados de posts e projetos
└── img/           # Imagens estáticas

api/
└── sendMail.js    # Endpoint de envio de e-mail (Nodemailer)
```

---

## Contato

**Gustavo Gomes Pucienik**
[gomespucienik@gmail.com](mailto:gomespucienik@gmail.com) · [github.com/GustavoPucienik](https://github.com/GustavoPucienik)
