import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aggregateImages from './aggregateImages';
import randomNumberGen from 'utils/randomNumberGen';


export default function CreateButtons({ options }) {
    return (
        <Fragment key={randomNumberGen()}>
            {options.type === 'withoutImage' &&
                <button className={`${options.size} ${options.color}`}>
                    <span>{options.text}</span>
                </button>
            }
            {options.type === 'withRightSVG' &&
                <button className={`${options.size} ${options.color} ${options.size}-with-svg`}>
                    <div className={`${options.size}-image-wrapper image-right`}>
                        <span>Download</span>
                        <FontAwesomeIcon className={`${options.size}-image`} icon={aggregateImages(options.icon)} />
                    </div>
                </button>
            }
            {options.type === 'withLeftSVG' &&
                <button className={`${options.size} ${options.color} ${options.size}-with-svg`}>
                    <div className={`${options.size}-image-wrapper image-left`}>
                        <FontAwesomeIcon className={`${options.size}-image`} icon={aggregateImages(options.icon)} />
                        <span>Download</span>
                    </div>
                </button>
            }
            {options.type === 'doubleIcons' &&
                <div className={`combined-buttons ${options.size}`}>
                    <button className={`button left color`}>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={aggregateImages(options.leftIcon)} />
                    </button>
                    <button className={`button right white`}>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={aggregateImages(options.rightIcon)} />
                    </button>
                </div>
            }
            {options.type === 'doubleCommands' &&
                <div className={`combined-buttons ${options.size}`}>
                    <button className={`button left color flex`}>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={aggregateImages(options.leftIcon)} />
                        <span>{options.leftText}</span>
                    </button>
                    <button className={`button right white flex`}>
                        <span>{options.rightText}</span>
                        <FontAwesomeIcon className={`combined-buttons-icon`} icon={aggregateImages(options.rightIcon)} />
                    </button>
                </div>
            }
            {options.type === 'tripleLetters' &&
                <div className={`combined-buttons ${options.size}`}>
                    <button className={`button left color flex`}>
                        <span>{options.leftText}</span>
                    </button>
                    <button className={`button middle white flex`}>
                        <span>{options.middleText}</span>
                    </button>
                    <button className={`button right white flex`}>
                        <span>{options.rightText}</span>
                    </button>
                </div>
            }
            {options.type === 'tripleDate' &&
                <div className={`combined-buttons ${options.size}`}>
                    <button className={`button left color flex`}>
                        <span>{options.leftText}</span>
                    </button>
                    <button className={`button middle white flex`}>
                        <span>{options.middleText}</span>
                    </button>
                    <button className={`button right white flex`}>
                        <span>{options.rightText}</span>
                    </button>
                </div>
            }
            {options.type === 'circleButton' &&
                <button className={`buttons-circle ${options.size}`}>
                    <FontAwesomeIcon className={`combined-buttons-icon`} icon={aggregateImages(options.icon)} />
                </button>
            }
        </Fragment>
    );
}

CreateButtons.propTypes = {
    options: PropTypes.exact({
        type: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string,
        text: PropTypes.string,
        icon: PropTypes.string
    }),
};