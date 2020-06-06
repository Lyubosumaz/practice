import React, { Fragment } from 'react';
import tabConfig from './tabs.json';

export default function CreateTabButtons(props) {
    const tabs = props.tabs;
    function setActiveTab(id) {
        const arr = [...tabs.array];
        let clicked = '';
        for (const element of arr) {
            element.isActive = false;
            if (element.id === id) {
                clicked = element;
                element.isActive = true;
            }
        }
        props.callback({ arr, id, clicked });
    }

    return (
        <Fragment>
            {tabs.type === 'text-only' &&
                <div className={`${tabs.class}-section`}>
                    <div className={`${tabs.class}-wrapper`}>
                        {tabs.array.map(tab =>
                            <button
                                key={tab.id}
                                className={`${tabs.class}-button ${tab.isActive ? `active-${tabs.class}` : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className={`${tabs.class}-button-span`}>{tab.name}</span>
                            </button>
                        )}
                    </div>
                </div>
            }
            {/* {props.typeOfTab === 'text-icon' &&
                <div className="tab-with-icon-section">
                    <div className="tab-with-icon-wrapper">
                        {props.arrayTabs.map(tab =>
                            <button
                                key={tab.id}
                                className={`tab-with-icon-button ${tab.isActive ? 'active-icon-tab' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.image ? <img className="tab-with-icon-button-svg" src={tab.image} /> : null}
                                <span className="tab-with-icon-button-span">{tab.name}</span>
                            </button>
                        )}
                    </div>
                </div>
            } */}
        </Fragment>
    );
}