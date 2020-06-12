import React, { useState, useEffect } from 'react';
import CreatePageBar from '../CreatePageBar';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

import leftArrow from '../../../assets/images/pagination/arrow-left-solid.svg';
import rightArrow from '../../../assets/images/pagination/arrow-right-solid.svg';

export default function ArrowPagination() {
    const onj = {
        numberOfPagination: pagination.arrowPagination.quantity,
        activePaginationIndex: pagination.arrowPagination.active,
        typeOfPagination: pagination.arrowPagination.type,
        paginationImages: [leftArrow, rightArrow],
        errorMessage: pagination.errorMessage,
    };
    const [pages, setPages] = useState(SetPaginationArray(onj));
    const [endPagination, setEndPagination] = useState(null);

    function handleIsActive({ arr, id, clicked }) {
        // showButtons();
        setShow('right');
        setPages(arr);
    }

    function showButtons() {
        const arr = [...pages];
        for (const iterator of arr) {
            iterator.show = false;
        }
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].isActive && arr[index + 4]) {
                for (let i = 0; i < 4; i++) {
                    arr[index + i].show = true;
                }
            }
        }
    }

    function handleArrows(direction) {
        let indexOfActiveElement = null;
        const newPages = [...pages];
       
        const pagesWithoutDots = [...pages.slice(0, pages.length - 2), ...pages.slice(pages.length - 1)];
        console.log(pagesWithoutDots)
        console.log(newPages)


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
                setShow('left');
                break;
            case 'right':
                for (let index = 0; index < newPages.length; index++) {
                    if (newPages[index].isActive && newPages[index + 1]) {
                        newPages[index + 1].isActive = true;
                        indexOfActiveElement = newPages[index + 1];
                        newPages[index].isActive = false;
                        break;
                    }
                }
                setPages(newPages);
                setShow('right');
                break;
            default:
                console.log('console from WordPagination')
                break;
        }
    }

    function setShow(direction) {
        let newArray = [...pages];
        let indexOfActiveElement = null;
        const defaultArray = [...pages];
        const pagesWithoutDots = [...pages.slice(0, pages.length - 2), ...pages.slice(pages.length - 1)];

        switch (direction) {
            case 'left':
                for (let index = 0; index < pages.length; index++) {
                    newArray[index].show = false
                    if (pages[index].isActive) {
                        indexOfActiveElement = index;
                    }
                }
                for (let index = 0; index < newArray.length; index++) {
                    if (indexOfActiveElement < newArray.length - 7) {
                        newArray = defaultArray;
                    }
                    if (indexOfActiveElement === index) {
                        if (newArray[index - 2]) { newArray[index - 2].show = true; }
                        if (newArray[index - 1]) { newArray[index - 1].show = true; }
                        newArray[index].show = true;
                        if (newArray[index + 1]) { newArray[index + 1].show = true; }
                        if (newArray[index + 2]) { newArray[index + 2].show = false; }
                        if (indexOfActiveElement < newArray.length - 2) {
                            newArray[newArray.length - 2].show = true;
                            newArray[newArray.length - 1].show = true;
                        }
                    }
                }

                setPages(newArray);
                break;
            case 'right':
                for (let index = 0; index < pages.length; index++) {
                    newArray[index].show = false
                    if (pages[index].isActive) {
                        indexOfActiveElement = index;
                    }
                }
                for (let index = 0; index < newArray.length; index++) {
                    if (indexOfActiveElement > newArray.length - 7) {
                        newArray = pagesWithoutDots;
                        console.log(defaultArray)
                    }

                    if (indexOfActiveElement === index) {
                        if (newArray[index - 2]) { newArray[index - 2].show = false; }
                        if (newArray[index - 1]) { newArray[index - 1].show = true; }
                        newArray[index].show = true;
                        if (newArray[index + 1]) { newArray[index + 1].show = true; }
                        if (newArray[index + 2]) { newArray[index + 2].show = true; }
                        if (indexOfActiveElement < newArray.length - 2) {
                            newArray[newArray.length - 2].show = true;
                            newArray[newArray.length - 1].show = true;
                        }
                    }
                }

                setPages(newArray);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log('+++++++++++++++++');
        setShow('right');
    }, []);

    return (
        <CreatePageBar
            type={onj.typeOfPagination}
            array={pages}
            callback={handleIsActive}
            callbackActions={handleArrows}
        />
    );
}