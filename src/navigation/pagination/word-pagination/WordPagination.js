import React, { useState } from 'react';
import CreatePageBar from '../CreatePageBar';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

export default function NumberPagination() {
    const onj = {
        numberOfPagination: pagination.wordPagination.quantity,
        activePaginationIndex: pagination.wordPagination.active,
        typeOfPagination: pagination.wordPagination.type,
        errorMessage: pagination.errorMessage,
    };
    const [pages, setPages] = useState(SetPaginationArray(onj));

    function handleIsActive({ arr, id, clicked }) {
        setPages(arr);
    }

    function handlePageSwap(direction) {
        const newPages = [...pages];

        switch (direction) {
            case 'left':
                for (let index = 0; index < newPages.length; index++) {
                    if (newPages[index].isActive && newPages[index - 1]) {
                        newPages[index - 1].isActive = true;
                        newPages[index].isActive = false;
                        if (!newPages[index - 1].show) {
                            newPages[index - 1].show = true;
                            newPages[index + 9].show = false;

                        }
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
                        if (!newPages[index + 1].show) {
                            newPages[index + 1].show = true;
                            newPages[index - 9].show = false;

                        }
                        break;
                    }
                }
                setPages(newPages);
                break;
            default:
                console.log('console from WordPagination')
                break;
        }
    }

    return (
        <CreatePageBar type={onj.typeOfPagination} array={pages} callback={handleIsActive} callbackActions={handlePageSwap} />
    );
}