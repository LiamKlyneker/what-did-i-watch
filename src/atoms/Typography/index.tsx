import { ReactNode } from "react";
import s from "./styles.module.css";

interface TypographyProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function Typography({
  children,
  variant = "p",
}: TypographyProps) {
  return <p className={s[variant]}>{children}</p>;
}
