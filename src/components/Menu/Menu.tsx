"use client";

import { FC } from "react";
import { AiOutlineDown, AiTwotoneBell, AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { useUserContext } from "@/features/user/UserContextProvider";
import { UserContext } from "@/types";
import Logo from "../canvas/Logo";

const Menu: FC = () => {
  //const userContext: UserContext | null = useUserContext();

  // let name = userContext?.user?.firstName ?? 'Guest';

  return (
    <div className="p-4 bg-white flex space-between items-center">
      <Logo />
      <div className="pr-5 relative">
        <input
          className="w-96 h-8 rounded pl-5 bg-input-back text-xs"
          type="text"
          placeholder="Search"
        />
        <AiOutlineSearch className="absolute top-2 right-8" />
      </div>
      <div className="flex items-center justify-around w-72 pr-5">
        <div className="flex items-center pr-5">
          <CiUser className="pr-2 text-2xl" />
          <h3 className="text-black text-center text-sm">Username</h3>
        </div>
        <AiOutlineDown />
        <AiTwotoneBell />
      </div>
    </div>
  );
};

export default Menu;
