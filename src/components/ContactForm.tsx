import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import { FiSend } from "react-icons/fi";
import { Button } from "./ui";

type Campos = { name: string; email: string; message: string };
const vazio: Campos = { name: "", email: "", message: "" };

function validar(f: Campos): Partial<Campos> {
  const erros: Partial<Campos> = {};
  if (f.name.trim().length < 3) erros.name = "Informe seu nome (mín. 3 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) erros.email = "Informe um e-mail válido.";
  if (f.message.trim().length < 10) erros.message = "A mensagem deve ter pelo menos 10 caracteres.";
  return erros;
}

const inputClass =
  "w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent disabled:opacity-60 aria-[invalid=true]:border-red-500";

export default function ContactForm() {
  const [form, setForm] = useState<Campos>(vazio);
  const [erros, setErros] = useState<Partial<Campos>>({});
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const novo = { ...form, [e.target.name]: e.target.value };
    setForm(novo);
    if (enviado) setErros(validar(novo));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    const v = validar(form);
    setErros(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success("Mensagem enviada com sucesso!");
      setForm(vazio);
      setEnviado(false);
    } catch {
      toast.error("Não foi possível enviar a mensagem. Tente novamente ou use os links ao lado.");
    } finally {
      setLoading(false);
    }
  };

  const campo = (name: keyof Campos, label: string, el: "input" | "textarea", type = "text") => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {el === "input" ? (
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={onChange}
          disabled={loading}
          aria-invalid={!!erros[name]}
          aria-describedby={`${name}-erro`}
          className={inputClass}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          rows={5}
          value={form[name]}
          onChange={onChange}
          disabled={loading}
          aria-invalid={!!erros[name]}
          aria-describedby={`${name}-erro`}
          className={`${inputClass} resize-y`}
        />
      )}
      <p id={`${name}-erro`} className="min-h-4 text-xs text-red-500">
        {erros[name]}
      </p>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-x-4 sm:grid-cols-2">
        {campo("name", "Nome", "input")}
        {campo("email", "E-mail", "input", "email")}
      </div>
      {campo("message", "Mensagem", "textarea")}
      <Button type="submit" disabled={loading} className="mt-2 sm:self-start">
        {loading ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Enviando...
          </>
        ) : (
          <>
            Enviar mensagem <FiSend />
          </>
        )}
      </Button>
    </form>
  );
}
