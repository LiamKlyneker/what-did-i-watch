import { ReactNode } from "react";
import s from "./styles.module.css";

interface TilesGridProps {
  children: ReactNode;
}

export default function TilesGrid(props: TilesGridProps) {
  const { children } = props;
  return <section className={s.tilesGrid}>{children}</section>;
}
