import { ReactNode } from "react";
import s from "./styles.module.css";

interface DataStatusProps {
  children: ReactNode;
}

export default function DataStatus(props: DataStatusProps) {
  const { children } = props;
  return <section className={s.dataStatus}>{children}</section>;
}
