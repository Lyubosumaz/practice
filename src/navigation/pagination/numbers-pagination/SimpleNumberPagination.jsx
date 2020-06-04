import React from 'react';
import CreatePageBar from '../CreatePageBar'

export default function SimpleNumberPagination() {
    const type = 'normal';
    const pages = [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3', isActive: true },
        { id: 4, text: '4' },
        { id: 5, text: '5' },
        { id: 6, text: '6' },
    ];

    return (
        <CreatePageBar arrayPages={pages} typeOfBar={type} />
    );
}