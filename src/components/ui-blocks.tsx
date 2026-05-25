import { Link } from "@tanstack/react-router";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="gradient-hero relative overflow-hidden text-primary-foreground">
      <div className="absolute inset-0 grid-fade" aria-hidden />
      <div className="page-hero-copy container-prose relative py-20 md:py-28">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
            {eyebrow}
          </div>
        )}
        <h1 className="hero-title max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-balance text-base text-primary-foreground/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}

export function CTAButton({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition";
  const styles = {
    primary: "bg-saffron text-saffron-foreground hover:brightness-110 shadow-sm",
    secondary: "border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground",
    ghost: "text-primary-foreground hover:text-teal",
  }[variant];
  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to!} className={cls}>
      {children}
    </Link>
  );
}
