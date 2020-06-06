import React from 'react';

export default function CreateTabBlock(props) {
    return (
        <div className="tab-content">
            <span className="tab-content-text">{props.data}</span>
        </div>

    );
}