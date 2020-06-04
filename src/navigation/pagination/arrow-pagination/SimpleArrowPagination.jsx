import React, { useState, useEffect } from 'react';
import CreatePageBar from '../CreatePageBar';

export default function SimpleArrowPagination() {
    const type = 'arrow';
    const [pages, setPages] = useState([
        { id: 1, text: '1', show: true },
        { id: 2, text: '2', show: true, isActive: true },
        { id: 3, text: '3', show: true },
        { id: 4, text: '4', show: true },
        { id: 5, text: '5' },
        { id: 6, text: '6' },
        { id: 7, text: '7' },
        { id: 8, text: '8' },
        { id: 9, text: '9' },
        { id: 10, text: '10' },
        { id: 11, text: '11' },
        { id: 12, text: '12' },
        { id: 13, text: '13' },
        { id: 14, text: '14' },
        { id: 15, text: '15' },
        { id: 16, text: '16' },
        { id: 17, text: '17' },
        { id: 18, text: '18' },
        { id: 19, text: '19' },
        { id: 20, text: '20' },
        { id: 21, text: '21' },
        { id: 22, text: '22' },
        { id: 23, text: '23' },
        { id: 24, text: '24' },
        { id: 25, text: '25' },
        { id: 26, text: '26' },
        { id: 27, text: '27' },
        { id: 28, text: '28' },
        { id: 29, text: '29' },
        { id: 30, text: '30' },
        { id: 31, text: '31' },
        { id: 32, text: '32' },
        { id: 33, text: '33' },
        { id: 34, text: '34' },
        { id: 35, text: '35' },
        { id: 36, text: '36' },
        { id: 37, text: '37' },
        { id: 38, text: '38' },
        { id: 39, text: '39' },
        { id: 40, text: '40' },
        { id: 41, text: '41' },
        { id: 42, text: '42' },
    ]);
    const [endPagination, setEndPagination] = useState(null);

    function handleIsActive({ arr, id, clicked }) {
        showButtons();
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

    function handleArrows(action) {
        const arr = [...pages];
        switch (action) {
            case 'pagination-arrow-left':
                for (let index = 0; index < arr.length; index++) {
                    console.log(index)
                    if (arr[index].isActive && arr[index - 1]) {
                        arr[index - 1].isActive = true;
                        arr[index].isActive = false;
                        showButtons();
                        break;
                    }
                }
                setPages(arr);
                break;
            case 'pagination-arrow-right':
                for (let index = 0; index < arr.length; index++) {
                    console.log(index + 1)
                    if (arr[index].isActive && arr[index + 1]) {
                        arr[index + 1].isActive = true;
                        arr[index].isActive = false;
                        showButtons();
                        break;
                    }
                }
                setPages(arr);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        console.log('+++++++++++++++++');
        // console.table(pages);
    }, [pages]);

    return (
        <CreatePageBar
            arrayPages={pages}
            callback={handleIsActive}
            callbackActions={handleArrows}
            typeOfBar={type}
        />
    );
}