import React, { Fragment } from 'react';
import PropTypes from "prop-types";

export default function CreateTabContent({ content }) {
    return (
        <Fragment>
            {!content[0].err && content.map(element =>
                < div key={element.id} className={`tab-content ${element.isActive ? 'show-tab-content' : ''}`} >
                    <span className="tab-content-text">{element.name}</span>
                </div>
            )}
        </Fragment>
    );
}

CreateTabContent.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, isActive: PropTypes.bool })).isRequired,
};