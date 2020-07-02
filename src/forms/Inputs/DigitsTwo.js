import React, { Fragment, useState } from 'react';

import { ReactComponent as ArrowUp } from '../../assets/images/inputs/angle-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/inputs/angle-down.svg';

export default function DigitsTwo() {
    const buttonSVGStyles = { fill: '#72809d', width: '7px', height: '7px' };
    const [inputNumberInner, setInputNumberInner] = useState(0);

    function handleDecrease() {
        setInputNumberInner(inputNumberInner - 1);
    }

    function handleIncrease() {
        setInputNumberInner(inputNumberInner + 1);
    }

    function handleInput(event) {
        const currentValue = event.target.value;
        if (Number.isInteger(Number(currentValue.substr(currentValue.length - 1)))) {
            setInputNumberInner(currentValue)
        }
        if (currentValue[0] === '0') {
            setInputNumberInner(currentValue.substr(1))
        }
        if (currentValue === '') {
            setInputNumberInner(0)
        }
    }

    return (
        <Fragment>
            <div className={`input-number-inner`}>
                <span className={`input-number-inner-text`}>Digits</span>
                <div className={`input-number-inner-wrapper`}>
                    <input className={`input-field`} type="number" onChange={handleInput} value={inputNumberInner} />
                    <div className={`button-wrapper`}>
                        <button className={`button-style button-increase`} onClick={handleIncrease}>
                            <ArrowUp style={buttonSVGStyles} />
                        </button>
                        <button className={`button-style button-decrease`} onClick={handleDecrease}>
                            <ArrowDown style={buttonSVGStyles} />
                        </button>
                    </div>
                </div >
            </div>
        </Fragment>
    );
}