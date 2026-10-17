import React from "react";
import type { IconType } from "react-icons";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: IconType;
  variant?: "primary" | "ghost";
}

// Enlace con apariencia de botón; abre en pestaña nueva si es externo
const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  icon: Icon,
  variant = "primary",
  className,
  children,
  ...rest
}) => {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cx(styles.button, styles[variant], className)}
      {...rest}
    >
      {Icon && <Icon size={14} aria-hidden="true" />}
      {children}
    </a>
  );
};

export default ButtonLink;
