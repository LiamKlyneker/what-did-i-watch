import { ReactNode } from "react";
import s from "./styles.module.css";

interface TypographyProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function Typography(props: TypographyProps) {
  const { children, variant = "p" } = props;
  if (variant === "h3") {
    return <h3 className={s.h3}>{children}</h3>;
  }
  return <p className={s[variant]}>{children}</p>;
}
