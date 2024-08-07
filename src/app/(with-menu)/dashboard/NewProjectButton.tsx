"use client";

import CreateProjectModal from "@/components/modals/CreateProjectModal";
import { useState } from "react";

const NewProjectButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex items-center justify-center w-28 h-8 text-xs bg-light-purple shadow-none rounded text-[#DDE4F0] font-bold"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        New Project
      </button>
      <CreateProjectModal {...{ isOpen, setIsOpen }} />
    </>
  );
};
export default NewProjectButton;
