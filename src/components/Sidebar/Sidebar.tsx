import React, { useState, FC } from 'react';
import styles from './Sidebar.module.css';

const Sidebar: FC = () => {

  
  return (
    <div className={styles.sidebar}>
      <a className={styles.sidebarItem} href="localhost:3000">Tickets</a>
      <a className={styles.sidebarItem} href="localhost:3000">Tasks</a>
      <a className={styles.sidebarItem} href="localhost:3000">Logout</a>
    </div>
  );
};

export default Sidebar;