"use client";

import { Ticket } from "@/types";
import { FC, useState } from "react";
import Modal from "@/components/modals/modal";
import DetailsCard from "../modals/DetailsCard/DetailsCard";

const TicketTableRow: FC<{ ticket: Ticket }> = ({ ticket }) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  return (
    <>
      <tr>
        <td>
          <button type="button" onClick={() => setDetailsOpen(true)}>
            {ticket.title}
          </button>
        </td>
        <td>{ticket.assignees ? ticket.assignees[0] : "unassigned"}</td>
        <td>{ticket.priority}</td>
        <td>{ticket.dateCreated}</td>
        <td>
          <select defaultValue={ticket.status} title="status">
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Complete</option>
          </select>
        </td>
        <td>{ticket.createdBy}</td>
        <td className="w-[90px]">{ticket.lastModified}</td>
      </tr>
      <Modal
        isOpen={detailsOpen}
        setIsOpen={setDetailsOpen}
        closeButton
        children={<DetailsCard ticket={ticket} setIsOpen={setDetailsOpen} />}
      />
    </>
  );
};
export default TicketTableRow;
