import { forwardRef } from "react";
import cx from "classnames";
import s from "./styles.module.css";

interface ButtonIconProps {
  icon: string;
  theme?: "light" | "dark";
  onClick?: () => void;
}

const ButtonIcon = forwardRef((props: ButtonIconProps, forwardRef: any) => {
  const { icon, theme = "light", onClick } = props;

  return (
    <button
      className={cx(s.buttonIcon, { [s[theme]]: theme })}
      onClick={onClick}
      type="button"
      ref={forwardRef}
    >
      <i className="material-icons-outlined">{icon}</i>
    </button>
  );
});

ButtonIcon.displayName = "ButtonIcon";

export default ButtonIcon;
