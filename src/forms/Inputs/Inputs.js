import React, { Fragment } from 'react';
import DigitsOne from './DigitsOne';
import DigitsTwo from './DigitsTwo';
import InputBasic from './InputBasic';
import Tag from './tag/Tag';
import Url from './Url';

export default function Inputs() {

    return (
        <Fragment>
            <div style={{ width: '25%', display: 'flex', justifyContent: 'space-between' }}>
                <DigitsOne />
                <DigitsTwo />
            </div>
            <InputBasic />
            <Tag />
            <Url />
        </Fragment>
    );
}