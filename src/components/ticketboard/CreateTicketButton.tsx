"use client";

import { Sprint } from "@/types";
import { FC, useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateTicketModal from "../modals/CreateTicketModal";

const CreateTicketButton: FC<{ sprint?: Sprint }> = ({ sprint }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => console.log(isOpen), [isOpen]);

  return (
    <>
      <button
        type="button"
        className="text-dark-purple flex w-fit gap-2 items-center justify-center text-sm"
        onClick={() => setIsOpen(true)}
      >
        <AiFillPlusCircle />
        Add Ticket
      </button>
      <CreateTicketModal {...{ isOpen, setIsOpen, sprint }} />
    </>
  );
};
export default CreateTicketButton;
