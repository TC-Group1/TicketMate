"use client";

import React, { useEffect } from "react";
import { FC } from "react";
import TicketBoard from "@/components/ticketboard/TicketBoard";
import TicketBoardTeam from "@/components/ticketboard/TicketBoardTeam";
import data from "@/mockData.json";
import { useRouter } from "next/navigation";

const Dashboard: FC = () => {
  const mockData = data;
  const router = useRouter();

  useEffect(() => {
    !mockData.user && router.push("/login");
  }, [mockData]);

  return (
    <div className="block border-t border-[0xc8cbd9] px-5 w-full">
      <h1 className="text-lg py-5">Dashboard</h1>
      <div className="flex w-full h-screen justify-around">
        {mockData?.projects && mockData.projects[0]?.tickets && (
          <TicketBoard tickets={mockData.projects[0].tickets} />
        )}
        {mockData?.projects && mockData.projects[0]?.team && (
          <TicketBoardTeam team={mockData.projects[0].team} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
