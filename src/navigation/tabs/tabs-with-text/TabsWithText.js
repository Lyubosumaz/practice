import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

export default function TabsWithText() {
    const [arrayTabsTest, setArrayTabsTest] = useState(adapter());

    function adapter() {
        let onj = {};
        for (let index = 0; index < tabs.allTextTabsSections.length; index++) {
            onj[index] = SetTabsArray({
                numberOfTabs: tabs.allTextTabsSections[index].quantity,
                namesOfTabs: tabs.tabsTextSections,
                activeTabIndex: tabs.allTextTabsSections[index].active,
                errorMessage: tabs.errorMessage,
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
                    <div key={randomNumberGen()} className="multi-line-position tab-position">
                        <CreateTabButtons
                            key={[keyIndex]}
                            type={tabs.tabsTextType}
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