import React from 'react';
import { FC } from 'react';
import TicketBoard from '@/components/ticketboard/TicketBoard';

const TicketBoardPage: FC = () => {

    const tickets = [{
        feature: 'Add a new feature',
        assignees: ['John Doe'],
        priority: 'High',
        dateCreated: '2021-09-01',
        status: 'In Progress',
        documentation: 'https://www.google.com',
        files: ['important_file.txt'],
    },
    {
        feature: 'Add a new feature',
        assignees: ['John Doe', 'Tyson Lind'],
        priority: 'Low',
        dateCreated: '2021-09-12',
        status: 'In Progress',
        documentation: 'https://www.google.com',
        files: ['special_image.jpeg'],
    }];

    return (
        <div>
            <TicketBoard tickets={tickets} />
        </div>
    )
}

export default TicketBoardPage;

