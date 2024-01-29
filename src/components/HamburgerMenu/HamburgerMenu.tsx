import React, { useState, FC } from 'react';
import  StaticImageData from 'next/image';
import styles from './HamburgerMenu.module.css';
import hamburgerImage from '@/Images/Hamburger.png';
import { useUserContext } from '@/features/user/UserContextProvider';
import { UserContext } from '@/types';



const HamburgerMenu: FC = () => {

  //const userContext: UserContext | null = useUserContext();

 // let name = userContext?.user?.firstName ?? 'User';
  
  return (
    <div className={styles.header}>
        <div className={styles.headerComponent}>
          <h2 className="welcomeText">Welcome, User</h2>
        </div>
        <div className={styles.headerComponent}>
          <StaticImageData src={hamburgerImage} alt="hamburgerButton" className={styles.hamburgerButton} />
        </div>
    </div>
  );
};

export default HamburgerMenu;