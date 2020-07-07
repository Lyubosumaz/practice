import React, { Fragment } from 'react';
import CreateButtons from '../CreateButtons';
import combinedButtonsArray from './combined-buttons.json';

import { ReactComponent as FacebookLogo } from 'assets/images/combined_buttons/facebooklogo.svg';
import { ReactComponent as GoogleLogo } from 'assets/images/combined_buttons/googlelogo.svg';
import { ReactComponent as InstagramLogo } from 'assets/images/combined_buttons/instagramlogo.svg';
import { ReactComponent as TwitterLogo } from 'assets/images/combined_buttons/twitterlogo.svg';

export default function CombinedButtons() {
    const svgSize = { width: '16px', height: '16px' };
    const separateSiblings = { marginBottom: '2em', display: 'flex' };
    const separateElements = { marginRight: '2em' };
    return (
        <Fragment>
            <div style={{ ...separateSiblings, display: 'inline-flex' }}>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.doubleIcons} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.doubleCommands} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.tripleLetters} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.tripleDate} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.circleButton} />
                </div>
            </div>
            <div style={{ display: 'inline-flex' }}>
                <CreateButtons options={combinedButtonsArray.circleButtonLarge} />
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.doubleIconsLarge} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.doubleCommandsLarge} />
                </div>
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={combinedButtonsArray.tripleLettersLarge} />
                </div>
                <CreateButtons options={combinedButtonsArray.tripleDateLarge} />
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <button className={`buttons-buttons-social-media`}>
                        <FacebookLogo style={{ fill: '#4267b2', ...svgSize }} />
                        <span>Login with Facebook</span>
                    </button>
                </div>
                <div style={separateElements}>
                    <button className={`buttons-buttons-social-media`}>
                        <GoogleLogo style={svgSize} />
                        <span>Login with Google</span>
                    </button>
                </div>
                <div style={separateElements}>
                    <button className={`buttons-buttons-social-media`}>
                        <InstagramLogo style={svgSize} />
                        <span>Login with Instagram</span>
                    </button>
                </div>
                <div style={separateElements}>
                    <button className={`buttons-buttons-social-media`}>
                        <TwitterLogo style={{ fill: '#1da1f2', ...svgSize }} />
                        <span>Login with Twitter</span>
                    </button>
                </div>
            </div>
        </Fragment >
    );
}