import React from 'react';
import PropTypes from "prop-types";

export default function CreatePageButtons({ array, type, callbackArr }) {

    function setActivePage(id) {
        const arr = [...array];
        let clicked = '';
        for (const element of arr) {
            element.isActive = false;
            if (element.id === id) {
                clicked = element;
                element.isActive = true;
            }
        }

        if (callbackArr) {
            callbackArr({ arr, id, clicked });
        }
    }

    return (
        <div className={`pagination-${type}-wrapper`}>
            {array.map(page =>
                <button
                    key={page.id}
                    className={`pagination-${type}-buttons ${page.isActive ? `active-${type}-button` : ''} ${page.show ? `show` : ''}`}
                    onClick={() => setActivePage(page.id)}
                    disabled={page.disabled ? page.disabled : false}
                >
                    <span>{page.text}</span>
                </button>
            )}
        </div>
    );
}

CreatePageButtons.propTypes = {
    array: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['number', 'arrow', 'word', 'dot', 'dash']).isRequired,
    callbackArr: PropTypes.func,
};