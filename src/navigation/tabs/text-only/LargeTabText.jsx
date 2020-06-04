import React, { useState } from 'react';
import CreateTabButtons from '../CreateTabButtons';

export default function LargeTabText() {
    const type = 'text-tabs';
    const [tabs, setTabs] = useState([
        { id: 1, name: 'Current Tab', isActive: true },
        { id: 2, name: 'Second Tab', isActive: false },
        { id: 3, name: 'Third Tab', isActive: false },
        { id: 4, name: 'Fourth Tab', isActive: false },
    ]);

    function handleIsActive(newTabArray) {
        setTabs(newTabArray);
    }

    return (
        <CreateTabButtons arrayTabs={tabs} callback={handleIsActive} typeOfTab={type} />
    );
}