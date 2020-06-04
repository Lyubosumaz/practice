import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';

import tabName from '../../../assets/images/navigation/stopwatch-solid.svg';
import secondTab from '../../../assets/images/navigation/bolt-solid.svg';

export default function MediumTabWithIcons() {
    const type = 'text-icon';
    const [tabs, setTabs] = useState([
        { id: 1, name: 'Tab Name', isActive: true, image: tabName, dialogText: "yellow" },
        { id: 2, name: 'Second Tab', isActive: false, image: secondTab, dialogText: "red" },
        { id: 3, name: 'Third Tab', isActive: false, image: tabName, dialogText: "blue" },
    ]);
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [tabsName, setTabName] = useState(null);

    function handleIsActive({ arr, clicked }) {
        setTabs(arr);
        setBackgroundColor(clicked.dialogText);
        setTabName(clicked.name);
    }

    function handleClick(event) {
        event.preventDefault();
        if (event.currentTarget.className === 'popup-dialog') {
            setBackgroundColor(null);
            setTabName(null);
        }
    }

    return (
        <Fragment>
            <CreateTabButtons arrayTabs={tabs} callback={handleIsActive} typeOfTab={type} />
            {backgroundColor && <div className="popup-dialog"
                onClick={(event) => handleClick(event)}
                style={{ background: backgroundColor }}
            ><span>{tabsName}</span></div>}
        </Fragment>
    );
}