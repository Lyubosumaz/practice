import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

import svgBolt from '../../../assets/images/tabs/bolt-solid.svg';
import svgStopwatch from '../../../assets/images/tabs/stopwatch-solid.svg';

export default function MediumIconSection() {
    const [mediumIconSection, setMediumIconSection] = useState(SetTabsArray({
        quantity: tabs.mediumIconSection.quantity,
        entitle: tabs.mediumIconSection.entitle,
        active: tabs.mediumIconSection.active,
        validation: tabs.mediumIconSection.validation,
        errorMessage: tabs.mediumIconSection.errorMessage,
        images: [svgStopwatch, svgBolt, svgStopwatch],
    }));

    function handleIsActive({ arr, id, clicked }) {
        setMediumIconSection(arr);
    }

    return (
        <Fragment key={randomNumberGen()}>
            <CreateTabButtons
                type={tabs.mediumIconSection.type}
                array={mediumIconSection}
                callback={handleIsActive}
            />
            <CreateTabContent
                content={mediumIconSection}
            />
        </Fragment>
    );
}