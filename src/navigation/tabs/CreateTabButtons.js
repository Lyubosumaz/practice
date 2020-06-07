import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import tabConfig from './tabs.json';

export default function CreateTabButtons({ array, type, length, callback }) {

    function setActiveTab(id) {
        const onj = {};
        let clicked = '';
        const arr = [...array];

        for (const element of arr) {
            element.isActive = false;
            if (element.id === id) {
                clicked = element;
                element.isActive = true;
            }
            onj[Object.keys(length)] = arr;
        }

        callback({ onj, id, clicked });
    }

    return (
        <Fragment>
            {type === 'text' &&
                <div className={`tab-${type}-section`}>
                    <div className={`tab-${type}-wrapper`}>
                        {array.map(tab =>
                            <button
                                key={tab.id}
                                className={`tab-${type}-button ${tab.isActive ? `active-tab-${type}` : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className={`tab-${type}-button-span`}>{tab.name}</span>
                            </button>
                        )}
                    </div>
                </div>
            }
            {/* {tabs.type === 'text-icon' &&
                <div className="tab-with-icon-section">
                    <div className="tab-with-icon-wrapper">
                        {tabs.array.map(tab =>
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
             */}
        </Fragment>
    );
}

CreateTabButtons.propTypes = {
    array: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })).isRequired,
    type: PropTypes.oneOf(['text']).isRequired,
    length: PropTypes.object.isRequired,
    callback: PropTypes.func.isRequired,
};