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

const Modal: FC<Props> = ({
  isOpen,
  setIsOpen,
  children,
  closeButton = false,
}) => {
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
      className={`fixed inset-0 m-auto border-4 backdrop-blur-md ${
        isOpen ? "flex bg-dark-purple/25" : "hidden"
      }`}
    >
      {closeButton && (
        <button
          type="button"
          title="close"
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md"
          onClick={onClose}
        >
          <AiOutlineClose className="text-gray-700"/>
        </button>
      )}
      {children}
    </dialog>
  );
};
export default Modal;
