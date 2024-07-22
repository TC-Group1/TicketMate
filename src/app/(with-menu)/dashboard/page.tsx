import React, { FC } from "react";
import TicketBoard from "@/components/ticketboard/TicketBoard";
import TicketBoardTeam from "@/components/ticketboard/TicketBoardTeam";
import data from "@/mockData.json";

const Dashboard: FC = () => {
  const mockData = data;

  const handleClick = () => {
    alert("hello");
  };

  return (
    <div className="block border-t border-[0xc8cbd9] px-5 w-full">
      <h1 className="text-lg py-5">Dashboard</h1>

      <div className="flex w-full h-screen justify-around">
        <div>
          <div className="flex justify-between w-full pr-5 mb-3">
            <h2 className="text-sm font-semibold">My Tickets</h2>
            <div className="flex">
              <button
                onClick={handleClick}
                className="flex items-center justify-center w-28 h-8 text-xs bg-[#5A79C8] border-[.5px] border-solid border-[#DDE4F0] shadow-none rounded text-[#FBFCFE] mr-3"
              >
                New Project
              </button>
              <button className="flex items-center justify-center w-28 h-8 text-xs bg-[#FBFCFE] border-[.5px] border-solid border-[#DDE4F0] shadow-none rounded text-light-purple">
                New Sprint
              </button>
            </div>
          </div>
          {mockData?.projects && mockData.projects[0]?.tickets && (
            <TicketBoard tickets={mockData.projects[0].tickets} />
          )}
        </div>
        <div>
          {mockData?.projects && mockData.projects[0]?.team && (
            <TicketBoardTeam team={mockData.projects[0].team} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
