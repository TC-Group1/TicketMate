"use client";

import { createContext, useContext, useState } from "react";
import { ModalContext } from "@/types";

const ModalContext = createContext<ModalContext | null>(null);

export const ModalContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Modal state

  const openModal = () => {
    setIsOpen(true);
    return;
  };
  const closeModal = () => {
    setIsOpen(false);
    return;
  };

 /*children, this property should not be given to context, you only want the children props to be used inside of the provider */

  const modalProps = {
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalProps}>{children}</ModalContext.Provider>
  );
};
export function useModal() {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("Modal Error");
  }
  return context;
}
