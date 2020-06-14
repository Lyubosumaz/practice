import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

export default function LargeTextSection() {
    const [largeTextSection, setLargeTextSection] = useState(SetTabsArray({
        quantity: tabs.largeTextSection.quantity,
        entitle: tabs.largeTextSection.entitle,
        active: tabs.largeTextSection.active,
        validation: tabs.largeTextSection.validation,
        errorMessage: tabs.largeTextSection.errorMessage
    }));

    function handleIsActive({ arr, id, clicked }) {
        setLargeTextSection(arr);
    }

    return (
        <Fragment key={randomNumberGen()}>
            <CreateTabButtons
                type={tabs.largeTextSection.type}
                array={largeTextSection}
                callback={handleIsActive}
            />
            <CreateTabContent
                content={largeTextSection}
            />
        </Fragment>
    );
}