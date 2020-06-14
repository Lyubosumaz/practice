import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

export default function SmallTextSection() {
    const [smallTextSection, setSmallTextSection] = useState(SetTabsArray({
        quantity: tabs.smallTextSection.quantity,
        entitle: tabs.smallTextSection.entitle,
        active: tabs.smallTextSection.active,
        validation: tabs.smallTextSection.validation,
        errorMessage: tabs.smallTextSection.errorMessage
    }));

    function handleIsActive({ arr, id, clicked }) {
        setSmallTextSection(arr);
    }

    return (
        <Fragment key={randomNumberGen()}>
            <CreateTabButtons
                type={tabs.smallTextSection.type}
                array={smallTextSection}
                callback={handleIsActive}
            />
            <CreateTabContent
                content={smallTextSection}
            />
        </Fragment>
    );
}