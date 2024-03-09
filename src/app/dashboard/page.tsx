import React from 'react';
import { FC } from 'react';
import TicketBoard from '@/components/ticketboard/TicketBoard';
import TicketBoardTeam from '@/components/ticketboard/TicketBoardTeam';
import data from '@/mockData.json';
import styles from './page.module.css';

const Dashboard: FC = () => {

const mockData = data;


{/* const mockData: APIResponse = {
        user: {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "test@gmail.com",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            role: "Developer",
            phoneNumber: "123-456-7890"},
        projects: [{
            id: 1,
        name: "Project 1",
        isActive: true,
        team: [{
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "test@gmail.com",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            role: "Developer",
            phoneNumber: "123-456-7890"}],
            tickets: [{
                id: 1,
                title: 'Add a new feature',
                assignees: ['John Doe', 'Jane Doe'],
                priority: 'High',
                dateCreated: '2021-09-01',
                createdBy: 'John Doe',
                status: 'In Progress',
                lastModified: '2021-09-01',
                description: 'This is a new feature that needs to be added to the application.'
            },
            {
                id: 2,
                title: 'Add a new feature',
                assignees: ['John Doe', 'Jane Doe'],
                priority: 'High',
                dateCreated: '2021-09-01',
                createdBy: 'John Doe',
                status: 'In Progress',
                lastModified: '2021-09-01',
                description: 'This is a new feature that needs to be added to the application.'
            }],
        }]
    };
*/}

    return (
        <div className={styles.dashboardContainer}>
        <h1 className={styles.h1}>Dashboard</h1>
        <div className={styles.dashboard}>
           {mockData?.projects && mockData.projects[0]?.tickets && (
                <TicketBoard tickets={mockData.projects[0].tickets} />
            )} 
            {mockData?.projects && mockData.projects[0]?.team && (
                <TicketBoardTeam team={mockData.projects[0].team} />
            )} 
        </div>
        </div>
    )
}

export default Dashboard;

