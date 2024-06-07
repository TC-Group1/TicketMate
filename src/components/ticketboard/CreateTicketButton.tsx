"use client";

import { Sprint } from "@/types";
import { FC } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const CreateTicketButton: FC<{ sprint?: Sprint }> = ({ sprint }) => {
  // placeholder function for
  const openCreateTicketModal = (sprint: Sprint | undefined) => {
    console.log("Sprint: ", sprint ? sprint.title : "undefined");
  };

  return (
    <button
      className="text-dark-purple flex w-fit gap-2 items-center justify-center text-sm"
      onClick={() => openCreateTicketModal(sprint)}
    >
      <AiFillPlusCircle />
      Add Ticket
    </button>
  );
};
export default CreateTicketButton;
