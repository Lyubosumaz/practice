import React, { useState } from 'react';
import CreatePageButtons from '../CreatePageButtons';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

export default function NumberPagination() {
    const onj = {
        numberOfPagination: pagination.numberPagination.quantity,
        activePaginationIndex: pagination.numberPagination.active,
        typeOfPagination: pagination.numberPagination.type,
        errorMessage: pagination.errorMessage,
    };
    const [pages, setPages] = useState(SetPaginationArray(onj));

    function handleIsActive({ arr, id, clicked }) {
        setPages(arr);
    }

    return (
        <nav className={`pagination-${onj.typeOfPagination}`}>
            <CreatePageButtons type={onj.typeOfPagination} array={pages} callbackArr={handleIsActive} />
        </nav>
    );
}