import { FC } from 'react';
import { User } from '@/types';
import styles from './TicketBoard.module.css';
import { AiOutlineUser } from 'react-icons/ai';

const TicketBoardTeam: FC<{ team: User[] }> = ({ team }) => {

    
  return (
    <div className={styles.dashboardRight}>
    <h2 className={styles.teamHeader}>Team</h2>
    <h3 className={styles.projectName}>Project name will go here</h3>
    <br />
        <ul className={styles.ul}>
            {team.map((member: User, index: number) => (
                <>
                <div className={styles.flexLi}><div className={styles.spaceBetween}> <AiOutlineUser style={{display:'inline-block'}} /> <span className={styles.textSmall}>{member.lastName}, {member.firstName}</span></div> <div className={styles.darkText}><h3 className={styles.subText}>{member.role}</h3></div></div>
                <br />
                </>
            ))}
        </ul>
      </div>
  );
};

export default TicketBoardTeam;
