import { FC } from "react";
import { Ticket } from "@/types";
import TicketTable from "./TicketTable";
import TicketTableRow from "./TicketTableRow";

const TicketBoard: FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  return (
    <div className="flex flex-col items-center pr-5 w-full border-r-[1px] border-light-border">
      <div className="flex justify-between w-full pr-5">
        <h2 className="text-sm font-semibold">My Tickets</h2>
        <button className="flex items-center justify-center w-28 h-8 text-xs bg-[#FBFCFE] border-[.5px] border-solid border-[#DDE4F0] shadow-none rounded text-light-purple">
          New Ticket
        </button>
      </div>
      <div className="text-xs border-spacing-x-[10px]">
        <h3 className="text-light-text">
          Tickets from xyz project (still need to implement project grab)
        </h3>
        <TicketTable>
          {tickets.map((ticket) => (
              <TicketTableRow {...{ ticket }} key={ticket.id} />
          ))}
        </TicketTable>
      </div>
    </div>
  );
};

export default TicketBoard;
