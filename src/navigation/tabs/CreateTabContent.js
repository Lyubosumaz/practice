import React, { Fragment } from 'react';
import PropTypes from "prop-types";

export default function CreateTabBlock({ content }) {
    return (
        <Fragment>
            {content.map(element =>
                < div key={element.id} className={`tab-content ${element.isActive ? 'show-tab-content' : ''}`} >
                    <span className="tab-content-text">{element.name}</span>
                </div>
            )}
        </Fragment>

    );
}

CreateTabBlock.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, isActive: PropTypes.bool })).isRequired,
};