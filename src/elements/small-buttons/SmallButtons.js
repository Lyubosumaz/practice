import React, { Fragment } from 'react';

import search from '../../assets/images/big_buttons/search-solid.svg'
import comment from '../../assets/images/big_buttons/comment-alt-regular.svg'
import angle from '../../assets/images/big_buttons/angle-down-solid.svg'

export default function SmallButtons() {

    return (
        <Fragment>
            <button className={`small-button full-color-main`}><span>Download</span></button>
            <button className={`small-button full-color-grey`}><span>Download</span></button>
            <button className={`small-button full-color-white`}><span>Download</span></button>
            <button className={`small-button full-color-border`}><span>Download</span></button>
        </Fragment >
    );
}