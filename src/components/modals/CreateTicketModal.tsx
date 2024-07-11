import React, { Dispatch, SetStateAction, MouseEvent, FormEvent } from "react";
import Modal from "./modal";
import { Sprint } from "@/types";

interface CreateTicketModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  sprint?: Sprint;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({
  isOpen,
  setIsOpen,
  sprint,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <Modal {...{ isOpen, setIsOpen }} closeButton>
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Create New Ticket</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4">
            <label className="text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateTicketModal;
