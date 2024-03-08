import { FC } from 'react';
import { Ticket } from '@/types';
import styles from './TicketBoard.module.css';

const TicketBoard: FC<{ tickets: Ticket[] }> = ({ tickets }) => {

    
  return (
        <div className={styles.dashboardLeft}>
        <div className={styles.headerFlex}>
        <h2 className={styles.h2}>My Tickets</h2>
        <button className={styles.button}>New Ticket</button>
        </div>
        <div className={styles.tableContainer}>
        <h3 className={styles.lightText}>Tickets from xyz project (still need to implement project grab)</h3>
      <table className={styles.tableContainer + " " + "border-separate"}>
        <thead className="text-left">
            <th>
                Feature
            </th>
            <th>
                Assigned to
            </th>
            <th>
                Priority
            </th>
            <th>
                Date Created
            </th>
            <th>
                Status
            </th>
            <th>
               Created By
            </th>
            <th>
                Modified
            </th>
        </thead>
        <tbody className="text-left">
            {tickets.map((ticket: any, index: number) => (
                <tr key={index}>
                    <td>{ticket.title}</td>
                    <td>{ticket.assignees[0]}</td>
                    <td>{ticket.priority}</td>
                    <td>{ticket.dateCreated}</td>
                    <td>
                     <select defaultValue={ticket.status}>
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Complete</option>
                    </select>
                    
                    </td>
                    <td>{ticket.createdBy}</td>
                    <td style={{width: '90px'}}>{ticket.lastModified}</td>
                </tr>
            ))}
            <tr>
                <td>
                    <input className="text-left" type="text" placeholder="Add New Feature" />
                </td>
                <td>
                    <select dir="ltr" style={{width:'80px'}}>
                        {/* need to implement entire usercontext object import so this can be a map of project users */}
                        <option value="High">John Doe</option>
                        <option value="Medium">Susan Anthony</option>
                        <option value="Low">Jane Doe</option>
                    </select>
                </td>
                <td>
                    <select dir="ltr">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </td>
                <td>
                    <input className="text-left" type="date" />
                </td>
                <td>
                    <select className="text-left">
                        <option value="In Progress">In Progress</option>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </select>
                </td>
                <td>
                    <input type="text" placeholder="Created By" style={{width:'80px'}} />
                </td>
                <td style={{width: '80px'}}>
                    <input type="text" disabled/>
                </td>
            </tr>
        </tbody>
      </table>
      </div>
      </div>
  );
};

export default TicketBoard;

