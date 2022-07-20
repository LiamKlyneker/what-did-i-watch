import { ReactNode } from "react";
import s from "./styles.module.css";

interface TypographyProps {
  children: ReactNode;
  variant?: "h1" | "h3" | "p";
}

export default function Typography(props: TypographyProps) {
  const { children, variant = "p" } = props;
  if (variant === "h1") {
    return <h1 className={s.h1}>{children}</h1>;
  }
  if (variant === "h3") {
    return <h3 className={s.h3}>{children}</h3>;
  }
  return <p className={s[variant]}>{children}</p>;
}
