import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';

export default function MediumTabText() {
    const type = 'text-tabs';
    const [tabs, setTabs] = useState([
        { id: 1, name: 'Current Tab', isActive: true, dialogText: "blue" },
        { id: 2, name: 'Second Tab', isActive: false, dialogText: "yellow" },
        { id: 3, name: 'Third Tab', isActive: false, dialogText: "green" },
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