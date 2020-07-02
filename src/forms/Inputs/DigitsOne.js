import React, { Fragment, useState } from 'react';

import { ReactComponent as Minus } from '../../assets/images/inputs/minus.svg';
import { ReactComponent as Plus } from '../../assets/images/inputs/plus.svg';

export default function DigitsOne() {
    const buttonSVGStyles = { fill: '#72809d', width: '7px', height: '7px' };
    const [inputNumberOuter, setInputNumberOuter] = useState(0);

    function handleDecrease() {
        setInputNumberOuter(inputNumberOuter - 1);
    }

    function handleIncrease() {
        setInputNumberOuter(inputNumberOuter + 1);
    }

    function handleInput(event) {
        const currentValue = event.target.value;
        if (Number.isInteger(Number(currentValue.substr(currentValue.length - 1)))) {
            setInputNumberOuter(currentValue)
        }
        if (currentValue[0] === '0') {
            setInputNumberOuter(currentValue.substr(1))
        }
        if (currentValue === '') {
            setInputNumberOuter(0)
        }
    }

    return (
        <Fragment>
            <div className={`input-number-outer`}>
                <span className={`input-number-outer-text`}>Digits</span>
                <div className={`input-number-outer-wrapper`}>
                    <button className={`box-style button-decrease`} onClick={handleDecrease}>
                        <Minus style={buttonSVGStyles} />
                    </button>
                    <input className={`box-style input-field`} type="number" onChange={handleInput} value={inputNumberOuter} />
                    <button className={`box-style button-increase`} onClick={handleIncrease}>
                        <Plus style={buttonSVGStyles} />
                    </button>
                </div >
            </div>
        </Fragment>
    );
}