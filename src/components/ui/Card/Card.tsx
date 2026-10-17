import React from "react";
import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "li" | "blockquote" | "figure";
  // Elevación y borde de acento al pasar el cursor
  interactive?: boolean;
  highlighted?: boolean;
}

// Superficie glass base del sistema
const Card: React.FC<CardProps> = ({
  as: Tag = "div",
  interactive,
  highlighted,
  className,
  children,
  ...rest
}) => (
  <Tag
    className={cx(
      "glass",
      styles.card,
      interactive && styles.interactive,
      highlighted && styles.highlighted,
      className
    )}
    {...rest}
  >
    {children}
  </Tag>
);

export default Card;
