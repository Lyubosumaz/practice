import React, { Fragment } from 'react';
import CreateButtons from '../CreateButtons';
import bigButtonsArray from './big-buttons.json';
import randomNumberGen from 'utils/randomNumberGen';

export default function FullColorButtons() {
    const separateSiblings = { marginBottom: '2em', display: 'flex' };
    const separateElements = { marginRight: '2em' };
    return (
        <Fragment key={randomNumberGen()}>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.colorButton} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.greyButton} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.whiteGreyButton} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.whiteColorButton} />
                </div>
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.colorButtonRightSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.greyButtonRightSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.whiteGreyButtonRightSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.whiteColorButtonRightSVG} />
                </div>
            </div>
            <div style={separateSiblings}>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.colorButtonLeftSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.greyButtonLeftSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.whiteGreyButtonLeftSVG} />
                </div>
                <div style={separateElements}>
                    <CreateButtons options={bigButtonsArray.whiteColorButtonLeftSVG} />
                </div>
            </div>
        </Fragment >
    );
}
