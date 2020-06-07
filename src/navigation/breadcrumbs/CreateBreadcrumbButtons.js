import React from 'react';

export default function CreateArrowBreadcrumbButtons(props) {
    return (
        <nav className={`${props.class}-section`}>
            {!props.arraySections[0].err &&
                <ul className={`${props.class}-content`}>
                    {props.arraySections.map(section =>
                        <li key={section.id} className={`${props.class}-item`}>
                            <button className={`${props.class}-button`}>{section.name}</button>
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