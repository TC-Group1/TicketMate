import { Sprint, Ticket } from "@/types";
import { FC } from "react";
import TicketTable from "./TicketTable";
import CreateTicketButton from "./CreateTicketButton";

interface Props {
  sprint?: Sprint;
  tickets: Array<Ticket>;
}

const TicketDisplay: FC<Props> = ({ sprint, tickets }) => {
  return (
    <div
      className={`rounded p-2 w-full flex flex-col gap-4${
        sprint ? " bg-input-back" : ""
      }`}
    >
      <div className="flex items-center gap-4 w-full">
        <h3 className="text-lg">{sprint ? sprint.title : "Backlog"}</h3>
        {sprint && (
          <div className="text-xs flex gap-1">
            <span>{sprint.dateStart}</span>
            <span>{"=>"}</span>
            <span>{sprint.dateEnd}</span>
          </div>
        )}
        {sprint && (
          <div className="w-fit text-xs flex gap-1 bg-dark-purple rounded text-white p-1 font-semibold ml-auto">
            <span>1600</span>
            <span>points</span>
          </div>
        )}
      </div>
      <div>
        <TicketTable {...{ tickets }} />
        <CreateTicketButton {...{ sprint }} />
      </div>
    </div>
  );
};
export default TicketDisplay;
