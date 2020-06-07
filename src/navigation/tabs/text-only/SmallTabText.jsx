import React, { useState, Fragment } from 'react';
import CreateTabButtons from '../CreateTabButtons';
import CreateTabContent from '../CreateTabContent'
import SetTabsArray from '../SetTabsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import tabs from '../tabs.json';

export default function SmallTabText() {
    const [arrayTabsTest, setArrayTabsTest] = useState(adapter());
    const type = 'text';

    function adapter() {
        let onj = {};
        for (let index = 0; index < tabs.allTextTabsSections.length; index++) {
            onj[index] = SetTabsArray({
                numberOfTabs: tabs.allTextTabsSections[index].quantity,
                activeTabIndex: tabs.allTextTabsSections[index].active
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
                    <Fragment key={randomNumberGen()}>
                        <CreateTabButtons
                            key={[keyIndex]}
                            type={type}
                            array={arrayTabsTest[keyIndex]}
                            length={{ [keyIndex]: arrayTabsTest[keyIndex].length }}
                            callback={handleIsActive}
                        />
                        <CreateTabContent
                            content={arrayTabsTest[keyIndex]}
                        />
                    </Fragment>
                );
            })
            }
        </Fragment>
    );
}