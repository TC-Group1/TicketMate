import { FC } from "react";
import { User } from "@/types";
import { AiOutlineUser } from "react-icons/ai";

const TicketBoardTeam: FC<{ team: User[] }> = ({ team }) => {
  return (
    <div className="flex flex-col w-full items-center pl-5">
      <h2 className="text-sm font-semibold pb-8 self-start">Team</h2>
      <h3 className="text-xs text-light-text self-start">
        Project name will go here
      </h3>
      <br />
      <ul className="w-3/4 self-start">
        {team.map((member) => (
          <li
            className="flex justify-between text-black text-base"
            key={member.id + "member"}
          >
            <div className="flex justify-between w-1/2">
              <AiOutlineUser className="inline-block" />

              <span className="text-xs">
                {member.lastName}, {member.firstName}
              </span>
            </div>
            <div className="text-light-text">
              <h3 className="text-">{member.role}</h3>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketBoardTeam;
