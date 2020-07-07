import React, { useState, useEffect } from 'react';
import CreatePageBar from '../CreatePageBar';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

import leftArrow from 'assets/images/pagination/arrow-left-solid.svg';
import rightArrow from 'assets/images/pagination/arrow-right-solid.svg';

export default function ArrowPagination() {
    const obj = {
        numberOfPagination: pagination.arrowPagination.quantity,
        activePaginationIndex: pagination.arrowPagination.active,
        typeOfPagination: pagination.arrowPagination.type,
        paginationImages: [leftArrow, rightArrow],
        errorMessage: pagination.errorMessage,
    };
    const [pages, setPages] = useState(SetPaginationArray(obj));

    useEffect(() => {
        showButtons();
    }, []);

    function saveAction(pagesArray) {
        setPages(pagesArray);
        showButtons();
    }

    function showButtons() {
        const newPages = [...pages];
        const activeIndex = indexOfActiveElement();

        hideButtons();
        if (!pages[activeIndex + 6]) {
            for (let i = 0; i < 7; i++) {
                newPages[(newPages.length - 1) - i].show = true;
                if (newPages[(newPages.length - 1) - i].id === 'dots') {
                    newPages[(newPages.length - 1) - i].show = false;
                }
            }
        } else if (pages[activeIndex - 1] && pages[activeIndex + 3]) {
            for (let i = 0; i < 4; i++) {
                newPages[(activeIndex - 1) + i].show = true;
            }
            newPages[newPages.length - 2].show = true;
            newPages[newPages.length - 1].show = true;
        } else {
            for (let i = 0; i < 4; i++) {
                newPages[activeIndex + i].show = true;
                newPages[activeIndex + i].show = true;
            }
            newPages[newPages.length - 2].show = true;
            newPages[newPages.length - 1].show = true;
        }
        setPages(newPages);
    }

    function hideButtons() {
        for (let index = 0; index < pages.length; index++) { pages[index].show = false; }
    }

    function handleActive({ arr, id, clicked }) {
        saveAction(arr);
    }

    function handleArrows(direction) {
        const newPages = [...pages];
        const activeIndex = indexOfActiveElement();

        switch (direction) {
            case 'left':
                if (newPages[activeIndex - 1] && newPages[activeIndex - 1].id !== 'dots') {
                    newPages[activeIndex - 1].isActive = true;
                    newPages[activeIndex].isActive = false;
                } else if (newPages[activeIndex - 1] && newPages[activeIndex - 1].id === 'dots') {
                    newPages[activeIndex - 2].isActive = true;
                    newPages[activeIndex].isActive = false;
                }
                saveAction(newPages);
                break;
            case 'right':
                if (newPages[activeIndex + 1] && newPages[activeIndex + 1].id !== 'dots') {
                    newPages[activeIndex + 1].isActive = true;
                    newPages[activeIndex].isActive = false;
                } else if (newPages[activeIndex + 1] && newPages[activeIndex + 1].id === 'dots') {
                    newPages[activeIndex + 2].isActive = true;
                    newPages[activeIndex].isActive = false;
                }
                saveAction(newPages);
                break;
            default:
                console.log('console from ArrowPagination')
                break;
        }
    }

    function indexOfActiveElement() {
        for (let index = 0; index < pages.length; index++) {
            if (pages[index].isActive) { return index; }
        }
    }

    return (
        <CreatePageBar
            type={obj.typeOfPagination}
            array={pages}
            callback={handleActive}
            callbackActions={handleArrows}
        />
    );
}