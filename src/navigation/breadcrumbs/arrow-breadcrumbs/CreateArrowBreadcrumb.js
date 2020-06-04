import React from 'react';

export default function CreateArrowBreadcrumb(props) {
    return (
        <nav className="breadcrumb-arrow-section">
            <ul className="breadcrumb-arrow-content">
                {props.arraySections.map(section =>
                    <li key={section.id} className="breadcrumb-arrow-item">
                        <button className={'breadcrumb-arrow-button'}>{section.name}</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}