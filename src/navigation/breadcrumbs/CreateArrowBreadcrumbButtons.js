import React from 'react';

export default function CreateArrowBreadcrumbButtons(props) {
    return (
        <nav className="breadcrumb-arrow-section">
            {!props.arraySections[0].err &&
                <ul className="breadcrumb-arrow-content">
                    {props.arraySections.map(section =>
                        <li key={section.id} className="breadcrumb-arrow-item">
                            <button className="breadcrumb-arrow-button">{section.name}</button>
                        </li>
                    )}
                </ul>
            }
            {props.arraySections[0].err &&
                <div>
                    {props.arraySections[0].err}
                </div>
            }
        </nav>
    );
}