import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSun, faAngleLeft, faAngleRight, faPen } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as FacebookLogo } from '../../assets/images/combined_buttons/facebooklogo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/images/combined_buttons/googlelogo.svg';
import { ReactComponent as InstagramLogo } from '../../assets/images/combined_buttons/instagramlogo.svg';
import { ReactComponent as TwitterLogo } from '../../assets/images/combined_buttons/twitterlogo.svg';

export default function CombinedButtons() {
    const svgSize = { width: '14px', height: '14px' };
    const rowStyle = { display: 'flex', marginTop: '1.2em' };
    const separator = { marginRight: '1.5em' };
    return (
        <Fragment>
            <div style={rowStyle}>
                <div style={separator}>
                    <div className="combined-buttons double-icons-S">
                        <button className={`button left color`}>
                            <FontAwesomeIcon className={`combined-buttons-icon`} icon={faSearch} />
                        </button>
                        <button className={`button right white`}>
                            <FontAwesomeIcon className={`combined-buttons-icon`} icon={faSun} />
                        </button>
                    </div>
                </div>
                <div style={separator}>
                    <div className="combined-buttons double-command-S">
                        <button className={`button left color flex`}>
                            <FontAwesomeIcon className={`combined-buttons-icon`} icon={faAngleLeft} />
                            <span>Backward</span>
                        </button>
                        <button className={`button right white flex`}>
                            <span>Forward</span>
                            <FontAwesomeIcon className={`combined-buttons-icon`} icon={faAngleRight} />
                        </button>
                    </div>
                </div>
                <div style={separator}>
                    <div className="combined-buttons triple-letters-S">
                        <button className={`button left color flex`}>
                            <span>S</span>
                        </button>
                        <button className={`button middle white flex`}>
                            <span>M</span>
                        </button>
                        <button className={`button right white flex`}>
                            <span>L</span>
                        </button>
                    </div>
                </div>
                <div style={separator}>
                    <div className="combined-buttons triple-date-S">
                        <button className={`button left color flex`}>
                            <span>Daily</span>
                        </button>
                        <button className={`button middle white flex`}>
                            <span>Monthly</span>
                        </button>
                        <button className={`button right white flex`}>
                            <span>Yearly</span>
                        </button>
                    </div>
                </div>
                <div style={separator}>
                    <button className={`buttons-circle buttons-circle-S`}>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={faPen} />
                    </button>
                </div>
                <div style={separator}>
                    <button className={`buttons-circle buttons-circle-L`}>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={faSearch} />
                    </button>
                </div>
            </div>
            <div style={rowStyle}>
                <div style={separator}>
                    <div className="combined-buttons double-icons-L">
                        <button className={`button left color`}>
                            <FontAwesomeIcon className={`combined-buttons-icon`} icon={faSearch} />
                        </button>
                        <button className={`button right white`}>
                            <FontAwesomeIcon className={`combined-buttons-icon`} icon={faSun} />
                        </button>
                    </div>
                </div>
                <div className="combined-buttons double-command-L">
                    <button className={`button left color flex`}>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={faAngleLeft} />
                        <span>Backward</span>
                    </button>
                    <button className={`button right white flex`}>
                        <span>Forward</span>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={faAngleRight} />
                    </button>
                </div>
            </div>
            <div style={rowStyle}>
                <div style={separator}>
                    <div className="combined-buttons triple-letters-L">
                        <button className={`button left color flex`}>
                            <span>S</span>
                        </button>
                        <button className={`button middle white flex`}>
                            <span>M</span>
                        </button>
                        <button className={`button right white flex`}>
                            <span>L</span>
                        </button>
                    </div>
                </div>
                <div className="combined-buttons triple-date-L">
                    <button className={`button left color flex`}>
                        <span>Daily</span>
                    </button>
                    <button className={`button middle white flex`}>
                        <span>Monthly</span>
                    </button>
                    <button className={`button right white flex`}>
                        <span>Yearly</span>
                    </button>
                </div>
            </div>
            <div style={rowStyle}>
                <div style={separator}>
                    <button className={`buttons-buttons-social-media`}>
                        <FacebookLogo style={{ fill: '#4267b2', ...svgSize }} />
                        <span>Login with Facebook</span>
                    </button>
                </div>
                <div style={separator}>
                    <button className={`buttons-buttons-social-media`}>
                        <GoogleLogo style={svgSize} />
                        <span>Login with Google</span>
                    </button>
                </div>
                <div style={separator}>
                    <button className={`buttons-buttons-social-media`}>
                        <InstagramLogo style={svgSize} />
                        <span>Login with Instagram</span>
                    </button>
                </div>
                <div style={separator}>
                    <button className={`buttons-buttons-social-media`}>
                        <TwitterLogo style={{ fill: '#1da1f2', ...svgSize }} />
                        <span>Login with Twitter</span>
                    </button>
                </div>
            </div>
        </Fragment >
    );
}