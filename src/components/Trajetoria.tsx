import { trajetoria } from "@/data/perfil";
import Reveal from "./Reveal";
import { cx } from "./ui";

export default function Trajetoria() {
  return (
    <ol className="relative ml-3 border-l border-border">
      {trajetoria.map((item, i) => (
        <li key={item.ano} className="relative pb-10 pl-8 last:pb-0">
          <span
            className={cx(
              "absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-bg",
              item.atual ? "bg-accent ring-4 ring-accent/25" : "bg-muted",
            )}
            aria-hidden
          />
          <Reveal delay={i * 60}>
            <p className="font-mono text-sm font-medium text-accent">
              {item.ano}
              {item.atual && <span className="ml-2 text-muted">· atual</span>}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {item.eventos.map((ev) => (
                <li key={ev} className="rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed">
                  {ev}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
