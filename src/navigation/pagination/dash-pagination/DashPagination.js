import React, { useState } from 'react';
import CreatePageButtons from '../CreatePageButtons';
import SetPaginationArray from '../SetPaginationArray';
import pagination from '../pagination.json';

export default function DashPagination() {
    const onj = {
        numberOfPagination: pagination.dashPagination.quantity,
        activePaginationIndex: pagination.dashPagination.active,
        typeOfPagination: pagination.dashPagination.type,
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