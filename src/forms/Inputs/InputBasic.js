import React, { Fragment } from 'react';
import { ReactComponent as Warning } from '../../assets/images/inputs/warning.svg';
import { ReactComponent as Dialog } from '../../assets/images/inputs/dialog.svg';


export default function InputBasic() {
    const inputSGVSize = { width: '15px', height: '15px' };
    return (
        <Fragment>
            <div className={`input-block`}>
                <span className={`input-block-text`}>Input Basic</span>
                <div className={`input-block-wrapper`}>
                    <input className={`input-field`} placeholder={`Input name`} />
                </div>
            </div>
            <div className={`input-block`}>
                <span className={`input-block-text`}>Input Error</span>
                <div className={`input-block-wrapper`}>
                    <input className={`input-field error`} placeholder={`Input name`} />
                    <Warning className={`input-svg`} style={{ fill: '#ff3e1d', ...inputSGVSize }} />
                </div>
            </div>
            <div className={`input-block`}>
                <span className={`input-block-text`}>Input Hovered</span>
                <div className={`input-block-wrapper`}>
                    <input className={`input-field`} placeholder={`Input name`} style={{ border: `2px solid #a29bfe` }} />
                </div>
            </div>
            <div className={`input-block`}>
                <span className={`input-block-text`}>Icon Right</span>
                <div className={`input-block-wrapper`}>
                    <input className={`input-field`} placeholder={`Input name`} />
                    <Dialog className={`input-svg`} style={{ fill: '#72809d', ...inputSGVSize }} />
                </div>
            </div>
        </Fragment>
    );
}