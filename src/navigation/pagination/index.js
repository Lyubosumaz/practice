import React, { Fragment } from 'react';
import randomNumberGen from '../../utils/randomNumberGen';

import NumberPagination from './number-pagination/NumberPagination';
import ArrowPagination from './arrow-pagination/ArrowPagination';
import WordPagination from './word-pagination/WordPagination';
import DotPagination from './dot-pagination/DotPagination';
import ButtonPagination from './button-pagination/ButtonPagination';
import DashPagination from './dash-pagination/DashPagination';

export default function CombinedTabWithText() {
    const separateSiblings = { margin: `2em 0 2em 0` };
    const separateElements = { marginRight: `1.5em` };
    return (
        <Fragment key={randomNumberGen()}>
            <div style={separateSiblings}>
                < NumberPagination />
            </div>
            <div style={separateSiblings}>
                < ArrowPagination />
            </div>
            <div style={separateSiblings}>
                < WordPagination />
            </div>
            <div style={{ display: `flex`, ...separateSiblings }}>
                <div style={separateElements}>
                    < DotPagination />
                </div>
                <div style={separateElements}>
                    < ButtonPagination />
                </div>
                <div style={separateElements}>
                    < DashPagination />
                </div>
            </div>
        </Fragment>
    );
}