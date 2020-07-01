import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export default function SmallButtons() {
    const rowStyle = {
        marginBottom: '1.1em',
        display: 'flex',
        justifyContent: 'space-between',
    };

    return (
        <Fragment>
            <div style={{ width: '34em' }}>
                <div style={rowStyle}>
                    <button className={`small-button full-color-main`}><span>Download</span></button>
                    <button className={`small-button full-color-grey`}><span>Download</span></button>
                    <button className={`small-button full-color-white`}><span>Download</span></button>
                    <button className={`small-button full-color-border`}><span>Download</span></button>
                </div>
                <div style={rowStyle}>
                    <button className={`small-button small-button-with-svg full-color-main`}>
                        <div className={`small-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`small-button-image`} icon={faSearch} />
                        </div>
                    </button>
                    <button className={`small-button small-button-with-svg full-color-grey`}>
                        <div className={`small-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`small-button-image`} icon={faAngleDown} />
                        </div>
                    </button>
                    <button className={`small-button small-button-with-svg full-color-white`}>
                        <div className={`small-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`small-button-image`} icon={faAngleDown} />
                        </div>
                    </button>
                    <button className={`small-button small-button-with-svg full-color-border`}>
                        <div className={`small-button-image-wrapper image-right`}>
                            <span>Download</span>
                            <FontAwesomeIcon className={`small-button-image`} icon={faAngleDown} />
                        </div>
                    </button>
                </div>
                <div style={rowStyle}>
                    <button className={`small-button small-button-with-svg full-color-main`}>
                        <div className={`small-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`small-button-image`} icon={faCommentAlt} />
                            <span>Download</span>
                        </div>
                    </button>
                    <button className={`small-button small-button-with-svg full-color-grey`}>
                        <div className={`small-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`small-button-image`} icon={faAngleDown} />
                            <span>Download</span>
                        </div>
                    </button>
                    <button className={`small-button small-button-with-svg full-color-white`}>
                        <div className={`small-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`small-button-image`} icon={faAngleDown} />
                            <span>Download</span>
                        </div>
                    </button>
                    <button className={`small-button small-button-with-svg full-color-border`}>
                        <div className={`small-button-image-wrapper image-left`}>
                            <FontAwesomeIcon className={`small-button-image`} icon={faAngleDown} />
                            <span>Download</span>
                        </div>
                    </button>
                </div>
            </div>
        </Fragment >
    );
}