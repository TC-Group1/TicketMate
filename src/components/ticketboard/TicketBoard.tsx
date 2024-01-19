import { FC } from 'react';
import { Ticket } from '@/types';

const TicketBoard: FC<{ tickets: Ticket[] }> = ({ tickets }) => {

    
  return (
      <table className="border-separate border-spacing-5 border">
        <thead>
            <th className="border">
                Requested feature:
            </th>
            <th>
                Assigned to:
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
                Documentation
            </th>
            <th>
                Files
            </th>
        </thead>
        <tbody>
            {tickets.map((ticket: any, index: number) => (
                <tr key={index}>
                    <td>{ticket.feature}</td>
                    <td>{ticket.assignees.map((assignee: any) => assignee + " ")}</td>
                    <td>{ticket.priority}</td>
                    <td>{ticket.dateCreated}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.documentation}</td>
                    <td>{ticket.files.map((file: any) => file + " ")}</td>
                </tr>
            ))}
            <tr>
                <td>
                    <input type="text" placeholder="Add New Feature" />
                </td>
                <td>
                    <input type="text" placeholder="Assignees" />
                </td>
                <td>
                    <select>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </td>
                <td>
                    <input type="date" />
                </td>
                <td>
                    <select>
                        <option value="In Progress">In Progress</option>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </select>
                </td>
                <td>
                    <input type="text" placeholder="Documentation" />
                </td>
                <td>
                    <input type="text" placeholder="Files" />
                </td>
            </tr>
        </tbody>
      </table>
  );
};

export default TicketBoard;

