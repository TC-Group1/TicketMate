import { FC } from "react";
import { Sprint, Ticket } from "@/types";
import TicketTable from "./TicketTable";
import SprintDisplay from "./SprintDisplay";
import { sprints } from "@/mockData.json";
import CreateTicketButton from "./CreateTicketButton";

const TicketBoard: FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  return (
    <div className="flex flex-col gap-4 items-center pr-5 w-full border-r-[1px] border-light-border">
      <div className="flex justify-between w-full pr-5">
        <h2 className="text-sm font-semibold">My Tickets</h2>
        <button className="flex items-center justify-center w-28 h-8 text-xs bg-[#FBFCFE] border-[.5px] border-solid border-[#DDE4F0] shadow-none rounded text-light-purple">
          New Sprint
        </button>
      </div>
      {sprints &&
        sprints.map((sprint: Sprint) => <SprintDisplay {...{ sprint }} />)}
      <div className="border-spacing-x-3 p-2 w-full">
        <h3 className="text-light-text text-xs">
          Tickets from xyz project (still need to implement project grab)
        </h3>
        <TicketTable {...{ tickets }} />
        <CreateTicketButton />
      </div>
    </div>
  );
};

export default TicketBoard;
