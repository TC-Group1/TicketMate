import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TicketContextProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const TicketContext = createContext<TicketContextProps | undefined>(undefined);

export const useTicketContext = (): TicketContextProps => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicketContext must be used within a TicketProvider');
  }
  return context;
};

export const TicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <TicketContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </TicketContext.Provider>
  );
};
