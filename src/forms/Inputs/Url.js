import React, { Fragment, useState } from 'react';

export default function Url() {
    const [protocol, setProtocol] = useState('https');
    const [main, setMain] = useState('');

    return (
        <Fragment>
            <div className={`url-input`}>
                <span className={`url-span`}>Url</span>
                <div className={`url-wrapper`}>
                    <input className={`url-protocol`} value={protocol + `://`} />
                    <input className={`url-main`} value={main} />
                </div>
            </div>
        </Fragment >
    );
}