import React, { Fragment } from 'react';

export default function Inputs() {
    return (
        <Fragment>
            <div className="quantity-wrapper">
                <button className="button">-</button>
                <input className="quantity"  value="1" />
                <button className="button">+</button>
            </div >
        </Fragment>
    );
}