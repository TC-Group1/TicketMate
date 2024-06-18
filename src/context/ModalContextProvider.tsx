"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ModalContextProps } from "@/types";
import CreateTicketModal from "@/features/modal/CreateTicketModal"; // Correct path

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalProps = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalProps}>
      {isOpen && <CreateTicketModal isOpen={isOpen} onClose={closeModal} />}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }
  return context;
};
