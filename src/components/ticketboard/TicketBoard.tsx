import { FC } from "react";
import { Sprint, Ticket } from "@/types";
import TicketDisplay from "./TicketDisplay";

interface Props {
  tickets: Array<Ticket>;
  sprints: Array<Sprint>;
}

const TicketBoard: FC<Props> = ({ tickets, sprints }) => {
  return (
    <div className="flex flex-col gap-4 items-center pr-5 w-full border-r-[1px] border-light-border">
      <div className="flex justify-between w-full pr-5">
        <h2 className="text-sm font-semibold">My Tickets</h2>
        <button className="flex items-center justify-center w-28 h-8 text-xs bg-[#FBFCFE] border-[.5px] border-solid border-[#DDE4F0] shadow-none rounded text-light-purple">
          New Sprint
        </button>
      </div>
      {sprints &&
        sprints.map((sprint: Sprint) => (
          <TicketDisplay
            {...{ sprint }}
            tickets={tickets.filter((ticket) => ticket.sprint === sprint.id)}
          />
        ))}
      <TicketDisplay
        tickets={tickets.filter((ticket) => ticket.sprint === null)}
      />
    </div>
  );
};

export default TicketBoard;
