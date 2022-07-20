import { forwardRef, ReactNode } from "react";
import s from "./styles.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = forwardRef((props: ButtonProps, forwardRef: any) => {
  const { onClick, children } = props;

  return (
    <button
      className={s.button}
      onClick={onClick}
      type="button"
      ref={forwardRef}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
