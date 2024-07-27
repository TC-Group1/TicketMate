import { Ticket } from "@/types";
import { Dispatch, FC, SetStateAction } from "react";
import DetailsCardLabel from "./DetailsCardLabel";
import DetailsCardButton from "./DetailsCardButton";
import DetailsCardInfo from "./DetailsCardInfo";

interface Props {
  ticket: Ticket;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DetailsCard: FC<Props> = ({ ticket, setIsOpen }) => {
  // TODO: put real edit Ticket function here ↓↓
  const editTicket = () => {};

  return (
    <div className="p-4">
      {/*↓↓ top div  ↓↓*/}
      <div className="flex">
        {/*↓↓ left side div  ↓↓*/}
        <div className="w-96 border-r-2 border-light-text px-4 h-100 flex flex-col gap-8">
          {/*↓↓ title and priority div ↓↓*/}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{ticket.title}</h2>
            <span className="rounded-md py-1 px-4 bg-light-yellow text-xs font-medium mr-4">
              {ticket.priority}
            </span>
          </div>
          <DetailsCardLabel>Description:</DetailsCardLabel>
          <p>{ticket.description}</p>
        </div>
        {/*↓↓ right side div ↓↓*/}
        <div className="w-fit max-w-[15rem] p-4 flex flex-col gap-4">
          <p>
            <DetailsCardLabel>Assigned to: </DetailsCardLabel>
            <DetailsCardInfo>
              {ticket.assignees?.map(
                (assignee, i) =>
                  assignee + (i + 1 !== ticket.assignees?.length ? ", " : "")
              )}
            </DetailsCardInfo>
          </p>
          <p>
            <DetailsCardLabel>Created: </DetailsCardLabel>
            <DetailsCardInfo>{ticket.dateCreated}</DetailsCardInfo>
          </p>
          <p>
            <DetailsCardLabel>Modified: </DetailsCardLabel>
            <DetailsCardInfo>{ticket.lastModified}</DetailsCardInfo>
          </p>
          <p>
            <DetailsCardLabel>Created By: </DetailsCardLabel>
            <DetailsCardInfo>{ticket.createdBy}</DetailsCardInfo>
          </p>
        </div>
      </div>
      {/*↓↓ buttons div ↓↓*/}
      <div className="flex justify-end h-20 gap-4 items-end">
        <DetailsCardButton
          className="bg-input-back"
          onClick={() => setIsOpen(false)}
        >
          Close
        </DetailsCardButton>
        <DetailsCardButton
          className="bg-light-purple text-white"
          onClick={editTicket}
        >
          Edit
        </DetailsCardButton>
      </div>
    </div>
  );
};
export default DetailsCard;
