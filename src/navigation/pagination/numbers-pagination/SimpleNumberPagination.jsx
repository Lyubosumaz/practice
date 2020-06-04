import React, { useState } from 'react';
import CreatePageBar from '../CreatePageBar'

export default function SimpleNumberPagination() {
    const type = 'normal';
    const [pages, setPages] = useState([
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3', isActive: true },
        { id: 4, text: '4' },
        { id: 5, text: '5' },
        { id: 6, text: '6' },
    ]);

    function handleIsActive({ arr, id, clicked }) {
        setPages(arr);
    }

    return (
        <CreatePageBar arrayPages={pages} callback={handleIsActive} typeOfBar={type} />
    );
}