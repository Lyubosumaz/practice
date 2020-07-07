import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateButtons from '../CreateButtons';
import smallButtonsArray from './small-buttons.json';

import { faSearch, faAngleDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import randomNumberGen from 'utils/randomNumberGen';

export default function SmallButtons() {
    const separateSiblings = { marginBottom: '2em', display: 'flex' };
    const separateElements = { marginRight: '2em' };
    return (
        <Fragment key={randomNumberGen()}>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.colorButton} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.greyButton} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.whiteGreyButton} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.whiteColorButton} />
                </div>
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.colorButtonRightSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.greyButtonRightSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.whiteGreyButtonRightSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.whiteColorButtonRightSVG} />
                </div>
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.colorButtonLeftSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.greyButtonLeftSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.whiteGreyButtonLeftSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={smallButtonsArray.whiteColorButtonLeftSVG} />
                </div>
            </div>
        </Fragment >
    );
}