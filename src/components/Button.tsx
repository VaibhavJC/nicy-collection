import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "whatsapp";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  target?: string;
  rel?: string;
}

interface ButtonAsButton extends BaseProps {
  onClick: () => void;
  to?: never;
  href?: never;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory hover:bg-gold-dark border border-ink hover:border-gold-dark",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory",
  outline:
    "bg-transparent text-ink border border-gold hover:bg-gold hover:text-ivory",
  whatsapp: "bg-forest text-ivory hover:bg-[#28361f] border border-forest",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base tracking-wide font-medium transition-colors duration-200 active:scale-[0.98]";

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", icon } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={classes}
      >
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}
