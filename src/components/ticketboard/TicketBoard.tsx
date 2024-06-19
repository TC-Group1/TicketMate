import React, { FC } from "react"
import { Ticket } from "@/types"
import styles from "./TicketBoard.module.css"
import { useModal } from "@/features/modal/ModalContextProvider"

const TicketBoard: FC<{ tickets: Ticket[] }> = ({ tickets }) => {
	const { openModal } = useModal()

	

	return (
		<div className={styles.dashboardLeft}>
			<div className={styles.headerFlex}>
				<h2 className={styles.h2}>My Tickets</h2>
				<button onClick={openModal} className={styles.button}>
					New Ticket
				</button>
			</div>
			<div className={styles.tableContainer}>
				<h3 className={styles.lightText}>
					Tickets from xyz project (still need to implement project grab)
				</h3>
				<table className={`${styles.tableContainer} border-separate`}>
					<thead className="text-left">
						<tr>
							<th>Feature</th>
							<th>Assigned to</th>
							<th>Priority</th>
							<th>Date Created</th>
							<th>Status</th>
							<th>Created By</th>
							<th>Modified</th>
						</tr>
					</thead>
					<tbody className="text-left">
						{tickets.map((ticket: Ticket) => (
							<tr key={ticket.id}>
								<td>{ticket.title}</td>
								<td>{ticket.assignees?.[0] ?? "Unassigned"}</td>
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
								<td style={{ width: "90px" }}>{ticket.lastModified}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default TicketBoard
