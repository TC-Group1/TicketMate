import { Ticket } from "@/types";
import { FC } from "react";
import TicketTableRow from "./TicketTableRow";

const TicketTable: FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  return (
    <table className={"text-xs border-spacing-x-2 border-separate"}>
      <thead className="text-left">
        <th>Feature</th>
        <th>Assigned to</th>
        <th>Priority</th>
        <th>Date Created</th>
        <th>Status</th>
        <th>Created By</th>
        <th>Modified</th>
      </thead>
      <tbody className="text-left">
        {tickets.map((ticket) => (
          <TicketTableRow {...{ ticket }} />
        ))}
      </tbody>
    </table>
  );
};
export default TicketTable;
