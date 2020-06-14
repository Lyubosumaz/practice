import React, { Fragment } from 'react';

import search from '../../../assets/images/big_buttons/search-solid.svg'
import comment from '../../../assets/images/big_buttons/comment-alt-regular.svg'
import angle from '../../../assets/images/big_buttons/angle-down-solid.svg'
import clock from '../../../assets/images/big_buttons/clock-regular.svg'
import print from '../../../assets/images/big_buttons/print-solid.svg'

export default function FullColorButtons() {

    return (
        <Fragment>
            <button className={`big-button full-color-main`}>
                <span>Download</span>
            </button>
            <button className={`big-button full-color-grey`}>
                <span>Download</span>
            </button>
            <button className={`big-button full-color-white`}>
                <span>Download</span>
            </button>
            <button className={`big-button full-color-border`}>
                <span>Download</span>
            </button>
            <button className={`full-color-main with-svg`}>
                <span>Download</span>
                <div className={`image-wrapper image-right`}>
                    <img src={search} />
                </div>
            </button>
            <button className={`full-color-grey with-svg`}>
                <span>Download</span>
                <div className={`image-wrapper image-right`}>
                    <img src={comment} />
                </div>
            </button>
            <button className={`full-color-white with-svg`}>
                <span>Download</span>
                <div className={`image-wrapper image-right`}>
                    <img src={angle} />
                </div>
            </button>
            <button className={`with-svg full-color-border`}>
                <span>Download</span>
                <div className={`image-wrapper image-right`}>
                    <img src={angle} />
                </div>
            </button>
            <button className={`with-svg full-color-main`}>
                <div className={`image-wrapper image-left`}>
                    <img src={search} />
                </div>
                <span>Download</span>
            </button>
            <button className={`with-svg full-color-grey`}>
                <div className={`image-wrapper image-left`}>
                    <img src={comment} />
                </div>
                <span>Download</span>
            </button>
            <button className={`with-svg full-color-white`}>
                <div className={`image-wrapper image-left`}>
                    <img src={angle} />
                </div>
                <span>Download</span>
            </button>
            <button className={`with-svg full-color-border`}>
                <div className={`image-wrapper image-left`}>
                    <img src={angle} />
                </div>
                <span>Download</span>
            </button>
        </Fragment >
    );
}