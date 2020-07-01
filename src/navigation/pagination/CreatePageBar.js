import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import CreatePageButtons from './CreatePageButtons';
import leftArrow from '../../assets/images/pagination/arrow-left-solid.svg';
import rightArrow from '../../assets/images/pagination/arrow-right-solid.svg';

export default function CreatePageBar({ array, type, callback, callbackActions }) {

    function handleClickPage(onj) {
        callback(onj);
    }

    function handleStartEndButtons(event) {
        event.preventDefault();
        callbackActions(event.target.className.split('-').pop());
    }

    function handleStartEndArrows(event) {
        event.preventDefault();
        callbackActions(event.currentTarget.className.split(' ')[0].split('-').pop())
    }

    return (
        <Fragment>
            {type === 'arrow' &&
                <nav className={`pagination-${type}`}>
                    <div>
                        <button className={`pagination-${type}-left action-button`} onClick={(event) => handleStartEndArrows(event)}>
                            <img className="pagination-section-button-svg" src={leftArrow} />
                        </button>
                    </div>
                    <CreatePageButtons array={array} type={type} callbackArr={handleClickPage} />
                    <div>
                        <button className={`pagination-${type}-right action-button`} onClick={(event) => handleStartEndArrows(event)}>
                            <img className="pagination-section-button-svg" src={rightArrow} />
                        </button>
                    </div>
                </nav>
            }
            {type === 'word' &&
                <nav className={`pagination-${type}`}>
                    <div className={`pagination-${type}-left action-button`}>
                        <button className={`pagination-section-button-${type} action-button`} onClick={(event) => handleStartEndButtons(event)}>
                            <span className={`pagination-${type}-left`}>Prev</span></button>
                    </div>
                    <CreatePageButtons array={array} type={type} callbackArr={handleClickPage} />
                    <div className={`pagination-${type}-right action-button`}>
                        <button className={`pagination-section-button-${type} action-button`} onClick={(event) => handleStartEndButtons(event)}><span
                            className={`pagination-words-right`}>Next</span></button>
                    </div>
                </nav>
            }
        </Fragment>
    );
}

CreatePageBar.propTypes = {
    array: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['arrow', 'word']).isRequired,
    callback: PropTypes.func,
    callbackArr: PropTypes.func,
};