import classNames from "classnames";
import s from "./styles.module.css";

const Icon = () => {
  return (
    <i className={classNames("material-icons-outlined", s.logo)}>
      view_carousel
    </i>
  );
};

export default Icon;
