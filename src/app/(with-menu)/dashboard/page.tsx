import React from "react"
import { FC } from "react"
import TicketBoard from "@/components/ticketboard/TicketBoard"
import TicketBoardTeam from "@/components/ticketboard/TicketBoardTeam"
import data from "@/mockData.json"
import styles from "./page.module.css"
import { useContext } from "react"
import { ModalContextProvider } from "@/features/modal/ModalContextProvider"

const Dashboard: FC = () => {
	const mockData = data

	return (
		<ModalContextProvider>
			<div className={styles.dashboardContainer}>
				<h1 className={styles.h1}>Dashboard</h1>
				<div className={styles.dashboard}>
					{mockData?.projects && mockData.projects[0]?.tickets && (
						<TicketBoard  tickets={mockData.projects[0].tickets} />
					)}
					{mockData?.projects && mockData.projects[0]?.team && (
						<TicketBoardTeam team={mockData.projects[0].team} />
					)}
				</div>
			</div>
		</ModalContextProvider>
	)
}

export default Dashboard
