import React from 'react';
import CreatePageBar from '../CreatePageBar';

export default function SimpleWordPagination() {
    const type = 'word';
    const pages = [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3', isActive: true },
        { id: 4, text: '4' },
        { id: 5, text: '5' },
        { id: 6, text: '6' },
        { id: 7, text: '7' },
        { id: 8, text: '8' },
        { id: 9, text: '9' },
        { id: 10, text: '10' },
        { id: 11, text: '11' },
        { id: 12, text: '12' },
        { id: 13, text: '13' },
        { id: 14, text: '14' },
        { id: 15, text: '15' },
    ];

    return (
        <CreatePageBar arrayPages={pages} typeOfBar={type} />
    );
}