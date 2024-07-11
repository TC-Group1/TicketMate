import { Ticket } from "@/types";
import { FC } from "react";

const TicketTableRow: FC<{ ticket: Ticket }> = ({ ticket }) => {
  return (
    <tr>
      <td>{ticket.title}</td>
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
  );
};
export default TicketTableRow;
