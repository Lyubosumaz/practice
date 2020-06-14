import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

import svgBolt from '../../../assets/images/tabs/bolt-solid.svg';
import svgStopwatch from '../../../assets/images/tabs/stopwatch-solid.svg';
import svgKey from '../../../assets/images/tabs/key-solid.svg';
import svgFlag from '../../../assets/images/tabs/flag-regular.svg';

export default function LargeIconSection() {
    const [largeIconSection, setLargeIconSection] = useState(SetTabsArray({
        quantity: tabs.largeIconSection.quantity,
        entitle: tabs.largeIconSection.entitle,
        active: tabs.largeIconSection.active,
        validation: tabs.largeIconSection.validation,
        errorMessage: tabs.largeIconSection.errorMessage,
        images: [svgKey, svgBolt, svgStopwatch, svgFlag],
    }));

    function handleIsActive({ arr, id, clicked }) {
        setLargeIconSection(arr);
    }

    return (
        <Fragment key={randomNumberGen()}>
            <CreateTabButtons
                type={tabs.largeIconSection.type}
                array={largeIconSection}
                callback={handleIsActive}
            />
            <CreateTabContent
                content={largeIconSection}
            />
        </Fragment>
    );
}