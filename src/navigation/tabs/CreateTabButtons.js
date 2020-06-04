import React, { Fragment } from 'react';

export default function CreateTabButtons(props) {

    function setActiveTab(id) {
        const arr = [...props.arrayTabs];
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
            {props.typeOfTab === 'text-tabs' &&
                <div className="tab-text-section">
                    <div className="tab-text-wrapper">
                        {props.arrayTabs.map(tab =>
                            <button
                                key={tab.id}
                                className={`tab-text-button ${tab.isActive ? 'active-text-tab' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="tab-text-button-span">{tab.name}</span>
                            </button>
                        )}
                    </div>
                </div>
            }
            {props.typeOfTab === 'text-icon' &&
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
            }
        </Fragment>
    );
}