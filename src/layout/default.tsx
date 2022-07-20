import { Logo } from "#atoms";
import { ReactNode } from "react";
import s from "./styles.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <header className={s.header}>
        <Logo />
      </header>
      <main className={s.main}>{children}</main>
    </>
  );
}
