import { FC, ReactNode } from "react";

const TicketTable: FC<{ children: ReactNode }> = ({ children }) => {
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
      <tbody className="text-left">{children}</tbody>
    </table>
  );
};
export default TicketTable;
