import React from 'react';

export default function CreatePipeBreadcrumb(props) {
    return (
        <nav className="breadcrumb-pipe-section">
            <ul className="breadcrumb-pipe-content">
                {props.arraySections.map(section =>
                    <li key={section.id} className="breadcrumb-pipe-item">
                        <button className="breadcrumb-pipe-button">{section.name}</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}