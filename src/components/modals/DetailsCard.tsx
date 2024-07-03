import { Ticket } from "@/types";
import { FC } from "react";
import CardLabel from "./CardLabel";

interface Props {
  ticket: Ticket;
}

const DetailsCard: FC<Props> = ({ ticket }) => {
  return (
    <div className="p-8">
      {/*↓↓ top div  ↓↓*/}
      <div className="flex">
        {/*↓↓ left side div  ↓↓*/}
        <div className="w-96 border-r border-black p-4 h-100 flex flex-col">
          {/*↓↓ title and priority div ↓↓*/}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{ticket.title}</h2>
            <span className="rounded py-2 px-4 bg-light-yellow text-lg font-medium">
              {ticket.priority}
            </span>
          </div>
          <CardLabel>Details:</CardLabel>
          <p className="mt-8">{ticket.description}</p>
        </div>
        {/*↓↓ right side div ↓↓*/}
        <div className="w-fit p-4">
          <CardLabel>Assigned to:</CardLabel>
          <p>
            {ticket.assignees?.map(
              (assignee, i) =>
                assignee + (i + 1 !== ticket.assignees?.length ? ", " : "")
            )}
          </p>
          <CardLabel>Created:</CardLabel>
          <p>{ticket.dateCreated}</p>
          <CardLabel>Modified:</CardLabel>
          <p>{ticket.lastModified}</p>npm
          <CardLabel>Created By:</CardLabel>
          <p>{ticket.createdBy}</p>
        </div>
      </div>
      {/*↓↓ buttons div ↓↓*/}
      <div className="flex justify-end h-20 gap-4">
        <button type="button">Close</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};
export default DetailsCard;
