import { Sprint } from "@/types";
import { FC } from "react";
import TicketTable from "./TicketTable";
import CreateTicketButton from "./CreateTicketButton";

const SprintDisplay: FC<{ sprint: Sprint }> = ({ sprint }) => {
  return (
    <div className="bg-input-back rounded p-2 w-full border-spacing-x-3">
      <div className="flex items-center gap-4">
        <h3 className="text-lg">{sprint.title}</h3>
        <div className="text-xs flex gap-1">
          <span>{sprint.dateStart}</span>
          <span>{"=>"}</span>
          <span>{sprint.dateEnd}</span>
        </div>
      </div>
      <TicketTable tickets={sprint.tickets} />
      <CreateTicketButton sprint={sprint} />
    </div>
  );
};
export default SprintDisplay;
