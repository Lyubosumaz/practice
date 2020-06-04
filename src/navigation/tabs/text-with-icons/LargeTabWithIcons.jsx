import React, { useState } from 'react';
import CreateTabButtons from '../CreateTabButtons';

import tabName from '../../../assets/images/navigation/key-solid.svg';
import secondTab from '../../../assets/images/navigation/bolt-solid.svg';
import thirdTab from '../../../assets/images/navigation/stopwatch-solid.svg';
import fourthTab from '../../../assets/images/navigation/flag-regular.svg';

export default function LargeTabWithIcons() {
    const type = 'text-icon';
    const [tabs, setTabs] = useState([
        { id: 1, name: 'Tab Name', isActive: true, image: tabName },
        { id: 2, name: 'Second Tab', isActive: false, image: secondTab },
        { id: 3, name: 'Third Tab', isActive: false, image: thirdTab },
        { id: 4, name: 'Fourth Tab', isActive: false, image: fourthTab },
    ]);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [tabsName, setTabName] = useState(null);

    function handleIsActive({ arr, clicked }) {
        setTabs(arr);
        setBackgroundColor(clicked.dialogText);
        setTabName(clicked.name);
    }

    function handleClick(event) {
        if (event.target.className === 'popup-dialog') {
            setBackgroundColor(null);
            setTabName(null);
        }
    }

    return (
        <CreateTabButtons arrayTabs={tabs} callback={handleIsActive} typeOfTab={type} />
    );
}