import React from 'react';

export default function CreatePipeBreadcrumb(props) {
    return (
        <nav className="breadcrumb-pipe-section">
            {!props.arraySections[0].err &&
                <ul className="breadcrumb-pipe-content">
                    {props.arraySections.map(section =>
                        <li key={section.id} className="breadcrumb-pipe-item">
                            <button className="breadcrumb-pipe-button">{section.name}</button>
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