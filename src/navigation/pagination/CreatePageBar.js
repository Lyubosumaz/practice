import React, { Fragment } from 'react';
import leftArrow from '../../assets/images/pagination/arrow-left-solid.svg';
import rightArrow from '../../assets/images/pagination/arrow-right-solid.svg';

export default function CreatePageBar(props) {

    function setActivePage(id) {
        const arr = [...props.arrayPages];
        let clicked = '';
        for (const element of arr) {
            element.isActive = false;
            if (element.id === id) {
                clicked = element;
                element.isActive = true;
            }
        }
        props.callback({ arr, id, clicked });
    }

    function handleArrowButtons(event) {
        event.preventDefault();
        props.callbackActions(event.currentTarget.className.split(' ')[0]);
    }

    return (
        <Fragment>
            {props.typeOfBar === 'normal' &&
                <nav className="pagination-numbers">
                    <div className="pagination-numbers-wrapper">
                        {props.arrayPages.map(page =>
                            <button
                                key={page.id}
                                className={`pagination-numbers-buttons ${page.isActive ? 'active-number-button' : ''}`}
                                onClick={() => setActivePage(page.id)}
                            >
                                <span>{page.text}</span>
                            </button>
                        )}
                    </div>
                </nav>
            }
            {props.typeOfBar === 'arrow' &&
                <nav className="pagination-arrow">
                    <button
                        className="pagination-arrow-left action-button"
                        onClick={(event) => handleArrowButtons(event)}
                    >
                        <img className="pagination-section-button-svg" src={leftArrow} />
                    </button>
                    <div className="pagination-arrow-wrapper">
                        {props.arrayPages.map((page, index) => {
                            if (props.arrayPages.length - 1 === index) {
                                // adding a element before last element
                                return (
                                    <Fragment>
                                        <button
                                            key={page.id}
                                            className={`pagination-arrow-buttons ${page.isActive ? 'active-arrow-button' : ''} show-button`}
                                            onClick={() => setActivePage(page.id)}
                                            disabled={true}
                                        >
                                            <span>...</span>
                                        </button>
                                        <button
                                            key="dots"
                                            className={`pagination-arrow-buttons ${page.isActive ? 'active-arrow-button' : ''} show-button`}
                                        >
                                            <span>{page.text}</span>
                                        </button>
                                    </Fragment>
                                );
                            }

                            return (<button
                                key={page.id}
                                className={`
                                    pagination-arrow-buttons
                                    ${page.isActive ? 'active-arrow-button' : ''}
                                    ${page.show ? 'show-button' : ''}
                                `}
                                onClick={() => setActivePage(page.id)}
                            >
                                <span>{page.text}</span>
                            </button>);
                        })}
                    </div>
                    <button
                        className="pagination-arrow-right action-button"
                        onClick={(event) => handleArrowButtons(event)}
                    >
                        <img className="pagination-section-button-svg" src={rightArrow} />
                    </button>
                </nav>
            }
            {props.typeOfBar === 'word' &&
                <nav className="pagination-words">
                    <div className="pagination-words-left action-button">
                        <button className="pagination-section-button-text action-button"><span>Prev</span></button>
                    </div>
                    <div className="pagination-words-wrapper">
                        {props.arrayPages.map((page) =>
                            <button key={page.id} className={`pagination-word-button ${page.isActive ? 'active-word-button' : ''}`}>
                                <span>{page.text}</span>
                            </button>

                        )}
                    </div>
                    <div className="pagination-words-right action-button">
                        <button className="pagination-section-button-text action-button"><span>Next</span></button>
                    </div>
                </nav>
            }
        </Fragment>
    );
}