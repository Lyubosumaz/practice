import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCommentAlt, faAngleDown, faClock, faPrint } from '@fortawesome/free-solid-svg-icons';

import search from '../../assets/images/big_buttons/search-solid.svg'
import comment from '../../assets/images/big_buttons/comment-alt-regular.svg'
import angle from '../../assets/images/big_buttons/angle-down-solid.svg'
import clock from '../../assets/images/big_buttons/clock-regular.svg'
import print from '../../assets/images/big_buttons/print-solid.svg'

export default function FullColorButtons() {
    const rowStyle = {
        marginBottom: '1.2em',
        display: 'flex',
        justifyContent: 'space-between',
    };

    return (
        <Fragment>
            <div style={{ width: '34em' }}>
                <div style={rowStyle}>
                    <button className={`big-button full-color-main`}>
                        <span>Download</span>
                    </button>
                    <button className={`big-button full-color-grey`}>
                        <span>Download</span>
                    </button>
                    <button className={`big-button full-color-white`}>
                        <span>Download</span>
                    </button>
                    <button className={`big-button full-color-border`}>
                        <span>Download</span>
                    </button>
                </div>
                <div style={rowStyle}>
                    <button className={`big-button big-button-with-svg full-color-main`}>
                        <div className={`big-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`big-button-image`} icon={faSearch} />
                        </div>
                    </button>
                    <button className={`big-button full-color-grey big-button-with-svg`}>
                        <div className={`big-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`big-button-image`} icon={faCommentAlt} />
                        </div>
                    </button>
                    <button className={`big-button full-color-white big-button-with-svg`}>
                        <div className={`big-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`big-button-image`} icon={faAngleDown} />
                        </div>
                    </button>
                    <button className={`big-button big-button-with-svg full-color-border`}>
                        <div className={`big-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`big-button-image`} icon={faAngleDown} />
                        </div>
                    </button>
                </div>
                <div style={rowStyle}>
                    <button className={`big-button big-button-with-svg full-color-main`}>
                        <div className={`big-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`big-button-image`} icon={faClock} />
                            <span>Download</span>
                        </div>
                    </button>
                    <button className={`big-button big-button-with-svg full-color-grey`}>
                        <div className={`big-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`big-button-image`} icon={faCommentAlt} />
                            <span>Download</span>
                        </div>
                    </button>
                    <button className={`big-button big-button-with-svg full-color-white`}>
                        <div className={`big-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`big-button-image`} icon={faPrint} />
                            <span>Download</span>
                        </div>
                    </button>
                    <button className={`big-button big-button-with-svg full-color-border`}>
                        <div className={`big-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`big-button-image`} icon={faCommentAlt} />
                            <span>Download</span>
                        </div>
                    </button>
                </div>
            </div>
        </Fragment >
    );
}