import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

export default function MediumTextSection() {
    const [mediumTextSection, setMediumTextSection] = useState(SetTabsArray({
        quantity: tabs.mediumTextSection.quantity,
        entitle: tabs.mediumTextSection.entitle,
        active: tabs.mediumTextSection.active,
        validation: tabs.mediumTextSection.validation,
        errorMessage: tabs.mediumTextSection.errorMessage
    }));

    function handleIsActive({ arr, id, clicked }) {
        setMediumTextSection(arr);
    }

    return (
        <Fragment key={randomNumberGen()}>
            <CreateTabButtons
                type={tabs.mediumTextSection.type}
                array={mediumTextSection}
                callback={handleIsActive}
            />
            <CreateTabContent
                content={mediumTextSection}
            />
        </Fragment>
    );
}