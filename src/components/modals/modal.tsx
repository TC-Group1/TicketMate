"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeButton?: boolean;
  children: ReactNode;
}

const modal: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    isOpen ? dialogRef.current?.showModal() : dialogRef.current?.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={
        isOpen
          ? "flex fixed inset-0 m-auto border-4 backdrop:bg-dark-purple/25"
          : undefined
      }
    >
      <button
        type="button"
        title="close"
        className="absolute top-2 right-2 h-fit w-fit"
        onClick={onClose}
      >
        <AiOutlineClose />
      </button>
      {children}
    </dialog>
  );
};
export default modal;
