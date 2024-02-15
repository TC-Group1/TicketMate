'use client';

import React, { useState, FC } from 'react';
import  StaticImageData from 'next/image';
import styles from './Menu.module.css';
import { AiOutlineDown, AiTwotoneBell, AiOutlineSearch } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { useUserContext } from '@/features/user/UserContextProvider';
import { UserContext } from '@/types';




const HamburgerMenu: FC = () => {

  //const userContext: UserContext | null = useUserContext();

 // let name = userContext?.user?.firstName ?? 'User';
  
  return (
    <div className={styles.header}>
      <div className={styles.searchContainer}>
        <input className={styles.searchBar} type="text" placeholder="Search" />
      </div>
      <div className={styles.userNav}>
        <div className={styles.userInfo}>
          <CiUser style={{paddingRight: '10px', fontSize: '24px'}} />
          <h3 className={styles.welcomeText}>Username</h3>
        </div>
          <AiOutlineDown />
          <AiTwotoneBell />
        </div>
    </div>
  );
};

export default HamburgerMenu;