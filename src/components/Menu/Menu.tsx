"use client";

import { FC } from "react";
import { AiOutlineDown, AiTwotoneBell, AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { useUserContext } from "@/features/user/UserContextProvider";
import Logo from "../canvas/Logo";

const Menu: FC = () => {
  const userContext = useUserContext();

  let name = userContext?.user?.firstName ?? 'Guest';

  return (
    <div className="p-4 bg-white flex justify-between items-center">
      <Logo />
      <div className="pr-5 relative">
        <input
          className="w-96 h-8 rounded-xl pl-5 bg-input-back text-field-input-text text-xs shadow-field-input focus:shadow-field-input-focus"
          type="text"
          placeholder="Search"
        />
        <AiOutlineSearch className="absolute top-2 right-8" aria-label="Search Icon"/>
      </div>
      <div className="flex items-center justify-around w-72 pr-5">
        <div className="flex items-center pr-5">
          <CiUser className="pr-2 text-2xl text-gray-dark" aria-label="User Icon" />
          <h3 className="text-black text-center text-sm">{name}</h3>
        </div>
        <AiOutlineDown aria-label="Dropdown Icon"/>
        <AiTwotoneBell aria-label="Notifications Icon"/>
      </div>
    </div>
  );
};

export default Menu;
