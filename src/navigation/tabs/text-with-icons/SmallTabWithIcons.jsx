import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabBlock from '../CreateTabBlock'
import SetTabsArray from '../SetTabsArray';
import tabsConfig from '../tabs.json';

import tabName from '../../../assets/images/navigation/file-regular.svg';
import secondTab from '../../../assets/images/navigation/bolt-solid.svg';

export default function SmallTabWithIcons() {
    const data = {
        quantity: tabsConfig.SmallTabWithIcons.quantity,
        active: tabsConfig.SmallTabWithIcons.active,
        type: tabsConfig.SmallTabWithIcons.type,
        class: tabsConfig.SmallTabWithIcons.class,
    }
    const validation = data.quantity >= 1 && data.quantity <= 4;
    const number = validation ? data.quantity : tabsConfig.errorMessage;
    const [tabs, setTabs] = useState(SetTabsArray({ numberOfTabs: number, activeIndex: data.active, images: [tabName, secondTab] }));
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