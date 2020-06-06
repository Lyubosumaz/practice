import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabBlock from '../CreateTabBlock'
import SetTabsArray from '../SetTabsArray';
import tabsConfig from '../tabs.json';

export default function MediumTabText() {
    const data = {
        quantity: tabsConfig.MediumTabText.quantity,
        active: tabsConfig.MediumTabText.active,
        type: tabsConfig.MediumTabText.type,
        class: tabsConfig.MediumTabText.class,
    }
    const validation = data.quantity >= 1 && data.quantity <= 4;
    const number = validation ? data.quantity : tabsConfig.errorMessage;
    const [tabs, setTabs] = useState(SetTabsArray({ numberOfTabs: number, activeIndex: data.active }));
    const [tabsName, setTabName] = useState(tabsConfig.tabsTextSections[data.active]);

    function handleIsActive({ arr, id, clicked }) {
        console.log(clicked.name)
        setTabs(arr);
        setTabName(clicked.name);
    }

    return (
        <Fragment>
            <CreateTabButtons tabs={{ type: data.type, array: tabs, class: data.class }} callback={handleIsActive} />
            <CreateTabBlock data={tabsName} />
        </Fragment>
    );
}