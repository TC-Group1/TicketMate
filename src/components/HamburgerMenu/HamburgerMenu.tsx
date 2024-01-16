"use client";
import React, { useState, FC } from 'react';
import  StaticImageData from 'next/image';
import styles from './HamburgerMenu.module.css';
import hamburgerImage from '@/Images/Hamburger.png';
import { useUserContext } from '@/features/user/UserContextProvider';
import { UserContext } from '@/types';

import Sidebar from '../Sidebar/Sidebar';

const HamburgerMenu: FC = () => {

  //const userContext: UserContext | null = useUserContext();

 // let name = userContext?.user?.firstName ?? 'User';

 const [burgerState, setBurgerState] = useState(false);
 const [burgerMenu, setBurgerMenu] = useState("burgerMenu hidden");

 const toggleBurgerMenu = () => {
    if(!burgerState){
      setBurgerState(true);
      setBurgerMenu("burgerMenu visible");
    }
    else if(burgerState){
      setBurgerState(false);
      setBurgerMenu("burgerMenu hidden");
    }

 }
  
  return (
    <div>
      <div className={styles.header}>
          <div className={styles.headerComponent}>
            <StaticImageData src={hamburgerImage} alt="hamburgerButton" className={styles.hamburgerButton} onClick={toggleBurgerMenu} />
          </div>
          <div className={styles.headerComponent}>
            <h2 className="welcomeText">Welcome, User</h2>
          </div>
      </div>
        <div className={burgerMenu}>
          <Sidebar />
        </div>
    </div>
  );
};

export default HamburgerMenu;