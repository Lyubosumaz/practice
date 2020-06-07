import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

export default function TabsWithIcons() {
    const [arrayTabsTest, setArrayTabsTest] = useState(adapter());

    function adapter() {
        let onj = {};
        for (let index = 0; index < tabs.allIconTabsSections.length; index++) {
            onj[index] = SetTabsArray({
                numberOfTabs: tabs.allIconTabsSections[index].quantity,
                namesOfTabs: tabs.tabsIconSections,
                activeTabIndex: tabs.allIconTabsSections[index].active,
                errorMessage: tabs.errorMessage,
                tabsImages: tabs.allIconTabsSections[index].images,
            });
        }

        return onj;
    }

    function handleIsActive({ onj, id, clicked }) {
        const newArrayTabsTest = Object.assign({ ...arrayTabsTest }, onj);
        setArrayTabsTest(newArrayTabsTest);
    }

    return (
        <Fragment key={randomNumberGen()}>
            {Object.keys(arrayTabsTest).map(keyIndex => {
                return (
                    <div key={keyIndex} className="multi-line-position tab-position secondary">
                        <CreateTabButtons
                            type={tabs.tabsIconType}
                            array={arrayTabsTest[keyIndex]}
                            length={{ [keyIndex]: arrayTabsTest[keyIndex].length }}
                            callback={handleIsActive}
                        />
                        <CreateTabContent
                            content={arrayTabsTest[keyIndex]}
                        />
                    </div>
                );
            })}
        </Fragment>
    );
}