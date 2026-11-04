import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />;
}

export function Section({
  id,
  eyebrow,
  title,
  action,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cx("scroll-mt-24 py-16 sm:py-24", className)}>
      <Container>
        {(title || eyebrow) && (
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              {eyebrow && <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>}
              {title && <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>}
            </div>
            {action}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

type Variant = "primary" | "ghost";
const btn = (v: Variant) =>
  cx(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none",
    v === "primary" &&
      "bg-accent text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:shadow-accent/40",
    v === "ghost" && "border border-border bg-surface/60 hover:border-accent hover:text-accent",
  );

export function Button({ variant = "primary", className, ...props }: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={cx(btn(variant), className)} {...props} />;
}

export function ButtonLink({
  to,
  href,
  variant = "primary",
  className,
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cx(btn(variant), className)}>
        {children}
      </a>
    );
  return (
    <Link to={to!} className={cx(btn(variant), className)}>
      {children}
    </Link>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { cx };
