import React, { useState } from 'react';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

import leftArrow from '../../../assets/images/pagination/arrow-left-solid.svg';
import rightArrow from '../../../assets/images/pagination/arrow-right-solid.svg';

export default function ButtonPagination() {
    const onj = {
        numberOfPagination: pagination.buttonPagination.quantity,
        activePaginationIndex: pagination.buttonPagination.active,
        typeOfPagination: pagination.buttonPagination.type,
        errorMessage: pagination.errorMessage,
    };
    const [pages, setPages] = useState(SetPaginationArray(onj));

    function handleStartEndButtons(event) {
        event.preventDefault();
        handleButton(event.currentTarget.className.split('-').pop());
    }

    function handleButton(direction) {
        const newPages = [...pages];

        switch (direction) {
            case 'left':
                for (let index = 0; index < newPages.length; index++) {
                    if (newPages[index].isActive && newPages[index - 1]) {
                        newPages[index - 1].isActive = true;
                        newPages[index].isActive = false;
                        break;
                    }
                }
                setPages(newPages);
                break;
            case 'right':
                for (let index = 0; index < newPages.length; index++) {
                    if (newPages[index].isActive && newPages[index + 1]) {
                        newPages[index + 1].isActive = true;
                        newPages[index].isActive = false;
                        break;
                    }
                }
                setPages(newPages);
                break;
            default:
                console.log('console from ButtonPagination')
                break;
        }
    }

    return (
        <nav className="pagination-button">
            <div className="pagination-action">
                <button className="pagination-button-left" onClick={(event) => handleStartEndButtons(event)} >
                    <img className="pagination-button-svg" src={leftArrow} />
                </button>
            </div>
            {pages.map(page => {
                if (page.isActive) {
                    return (
                        <div key={page.id} className="pagination-button-wrapper">
                            <img className="pagination-button-svg" src={leftArrow} />
                            <span className="pagination-button-info">{page.text}/{pages.length}</span>
                            <img className="pagination-button-svg" src={rightArrow} />
                        </div>
                    )
                }
            })}
            <div className="pagination-action">
                <button className="pagination-button-right" onClick={(event) => handleStartEndButtons(event)}>
                    <img className="pagination-button-svg" src={rightArrow} />
                </button>
            </div>
        </nav>
    );
}