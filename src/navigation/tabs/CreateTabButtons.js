import React, { Fragment } from 'react';
import PropTypes from "prop-types";

export default function CreateTabButtons({ array, type, callback }) {

    function setActiveTab(id) {
        const arr = [...array];
        let clicked = '';

        for (const element of arr) {
            element.isActive = false;
            if (element.id === id) {
                clicked = element;
                element.isActive = true;
            }
        }

        callback({ arr, id, clicked });
    }

    return (
        <Fragment>
            {!array[0].err &&
                <div className={`tab-${type}-section`}>
                    <div className={`tab-${type}-wrapper`}>
                        {array.map(tab =>
                            <button
                                key={tab.id}
                                className={`tab-${type}-button ${tab.isActive ? `active-tab-${type}` : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.image ? <img className="tab-with-icon-button-svg" src={tab.image} alt={tab.name} /> : null}
                                <span className={`tab-${type}-button-span`}>{tab.name}</span>
                            </button>
                        )}
                    </div>
                </div>
            }
            {array[0].err && <div>{array[0].err}</div>}
        </Fragment>
    );
}

CreateTabButtons.propTypes = {
    array: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })).isRequired,
    type: PropTypes.oneOf(['text', 'with-icon']).isRequired,
    callback: PropTypes.func.isRequired,
};