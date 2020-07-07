import React, { Fragment } from 'react';
import randomNumberGen from 'utils/randomNumberGen';

import SmallTextSection from './SmallTextSection';
import MediumTextSection from './MediumTextSection';
import LargeTextSection from './LargeTextSection';

export default function CombinedTabWithText() {
    const separateElements = { margin: `3em 0 3em 0` };
    return (
        <Fragment key={randomNumberGen()}>
            <div style={separateElements}>
                <SmallTextSection />
            </div>
            <div style={separateElements}>
                <MediumTextSection />
            </div>
            <div style={separateElements}>
                <LargeTextSection />
            </div>
        </Fragment>
    );
}