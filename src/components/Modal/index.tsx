import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import s from "./styles.module.css";
import { ButtonIcon } from "#atoms";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { children, onClose } = props;

  const handleOnOpenChange = (open: boolean) => {
    !open && onClose();
  };

  return (
    <Dialog.Root defaultOpen onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Trigger asChild>
            <span className={s.closeButton}>
              <ButtonIcon icon="clear" theme="dark" />
            </span>
          </Dialog.Trigger>
        </Dialog.Overlay>
        <Dialog.Content className={s.content}>
          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
