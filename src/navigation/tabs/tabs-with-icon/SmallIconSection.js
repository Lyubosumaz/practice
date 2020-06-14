import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

import svgPage from '../../../assets/images/tabs/file-regular.svg';
import svgBolt from '../../../assets/images/tabs/bolt-solid.svg';

export default function SmallIconSection() {
    const [smallIconSection, setSmallIconSection] = useState(SetTabsArray({
        quantity: tabs.smallIconSection.quantity,
        entitle: tabs.smallIconSection.entitle,
        active: tabs.smallIconSection.active,
        validation: tabs.smallIconSection.validation,
        errorMessage: tabs.smallIconSection.errorMessage,
        images: [svgPage, svgBolt],
    }));

    function handleIsActive({ arr, id, clicked }) {
        setSmallIconSection(arr);
    }

    return (
        <Fragment key={randomNumberGen()}>
            <CreateTabButtons
                type={tabs.smallIconSection.type}
                array={smallIconSection}
                callback={handleIsActive}
            />
            <CreateTabContent
                content={smallIconSection}
            />
        </Fragment>
    );
}