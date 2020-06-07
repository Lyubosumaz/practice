import React from 'react';
import PropTypes from "prop-types";

export default function CreateBreadcrumbButtons({ array, type }) {
    return (
        <nav className={`breadcrumb-${type}-section`}>
            {!array[0].err &&
                <ul className={`breadcrumb-${type}-content`}>
                    {array.map(section =>
                        <li key={section.id} className={`breadcrumb-${type}-item`}>
                            <button className={`breadcrumb-${type}-button`}>{section.name}</button>
                        </li>
                    )}
                </ul>
            }
            {array[0].err && <div>{array[0].err}</div>}
        </nav>
    );
}

CreateBreadcrumbButtons.propTypes = {
    array: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })).isRequired,
    type: PropTypes.oneOf(['arrow', 'pipe']).isRequired,
};