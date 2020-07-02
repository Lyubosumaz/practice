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

    function handleActive({ arr, id, clicked }) {
        // console.log(arr);
        // setPages(arr);
    }

    function showButtons() {
        const arr = [...pages];
        let indexOfActiveElement = null;
        for (let index = 0; index < arr.length; index++) {
            arr[index].show = false;
            if (arr[index].isActive) { indexOfActiveElement = index; }
        }
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].isActive && arr[index + 4]) {
                for (let i = 0; i < 4; i++) {
                    arr[index + i].show = true;
                }
            }
        }
        // console.log(indexOfActiveElement);
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
                showButtons()
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
                showButtons()
                break;
            default:
                console.log('console from WordPagination')
                break;
        }
    }

    useEffect(() => {
        showButtons();
        // console.log('+++++++++++++++++');
    }, []);

    return (
        <CreatePageBar
            type={onj.typeOfPagination}
            array={pages}
            callback={handleActive}
            callbackActions={handleArrows}
        />
    );
}