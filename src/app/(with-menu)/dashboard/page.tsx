
"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { FC } from "react";
import TicketBoard from "@/components/ticketboard/TicketBoard";
import TicketBoardTeam from "@/components/ticketboard/TicketBoardTeam";
import data from "@/mockData.json";
import { Project } from "@/types";
import NewProjectButton from "./NewProjectButton";


const Dashboard: FC = () => {
	const mockData = data


  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleProjectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentProject(
      mockData.projects.find(
        (project) => project.id === parseInt(event.currentTarget.value)
      ) || null
    );
  };

  useEffect(() => mockData && setCurrentProject(mockData.projects[0]), []);

  return (
    <div className="flex flex-col gap-4 border-t border-[0xc8cbd9] px-5 w-full">
      <h1 className="text-lg py-5">Dashboard</h1>
      <div className="flex justify-between w-1/2">
        <select
          title="project"
          name="project"
          id="project"
          className="rounded"
          onChange={(event) => handleProjectChange(event)}
        >
          {mockData.projects &&
            mockData.projects.map((project) => (
              <option value={project.id}>{project.name}</option>
            ))}
        </select>
        <NewProjectButton />
      </div>
      <div className="flex w-full h-screen justify-around">
        {currentProject && currentProject?.tickets && (
          <TicketBoard tickets={currentProject.tickets} />
        )}
        {currentProject && currentProject?.team && (
          <TicketBoardTeam
            name={currentProject.name}
            team={currentProject.team}
          />
        )}
      </div>
    </div>
  );
};


export default Dashboard
