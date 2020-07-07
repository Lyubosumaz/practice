import React, { Fragment } from 'react';
import randomNumberGen from 'utils/randomNumberGen';

import SmallIconSection from './SmallIconSection';
import MediumIconSection from './MediumIconSection';
import LargeIconSection from './LargeIconSection';

export default function CombinedTabWithIcons() {
    const separateElements = { margin: `3em 0 3em 0` };
    return (
        <Fragment key={randomNumberGen()}>
            <div style={separateElements}>
                <SmallIconSection />
            </div>
            <div style={separateElements}>
                <MediumIconSection />
            </div>
            <div style={separateElements}>
                <LargeIconSection />
            </div>
        </Fragment>
    );
}