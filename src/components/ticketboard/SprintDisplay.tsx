import { Sprint } from "@/types";
import { FC } from "react";
import TicketTable from "./TicketTable";
import CreateTicketButton from "./CreateTicketButton";

const SprintDisplay: FC<{ sprint: Sprint }> = ({ sprint }) => {
  return (
    <div className="bg-input-back rounded p-2 w-full flex flex-col gap-4">
      <div className="flex items-center gap-4 w-full">
        <h3 className="text-lg">{sprint.title}</h3>
        <div className="text-xs flex gap-1">
          <span>{sprint.dateStart}</span>
          <span>{"=>"}</span>
          <span>{sprint.dateEnd}</span>
        </div>
        <div className="w-fit text-xs flex gap-1 bg-dark-purple rounded text-white p-1 font-semibold ml-auto">
          <span>{sprint.points}</span>
          <span>points</span>
        </div>
      </div>
      <div>
        <TicketTable tickets={sprint.tickets} />
        <CreateTicketButton sprint={sprint} />
      </div>
    </div>
  );
};
export default SprintDisplay;
