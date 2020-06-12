import React, { useState } from 'react';
import CreatePageButtons from '../CreatePageButtons';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

export default function DotPagination() {
    const onj = {
        numberOfPagination: pagination.dotPagination.quantity,
        activePaginationIndex: pagination.dotPagination.active,
        typeOfPagination: pagination.dotPagination.type,
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