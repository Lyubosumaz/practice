import PropTypes from "prop-types";

export default function SetPaginationArray({ numberOfPagination, activePaginationIndex, errorMessage, paginationImages, typeOfPagination }) {
    let paginationArray = [];
    const validation = numberOfPagination >= 1;
    const newData = validation ? numberOfPagination : errorMessage;

    if (typeOfPagination === 'dot' || typeOfPagination === 'dash') {
        switch (typeof newData) {
            case 'number':
                for (let index = 0; index < newData; index++) {
                    paginationArray.push({ id: index + 1, isActive: false });
                    if (activePaginationIndex === index) { paginationArray[index].isActive = true; }
                }
                break;
            case 'string':
                paginationArray.push({ err: newData });
                break;
            default:
                console.error("Something went wrong in the SetPaginationArray");
                paginationArray.push({ err: newData });
                break;
        }
    } else if (typeOfPagination === 'arrow') {
        switch (typeof newData) {
            case 'number':
                for (let index = 0; index <= newData; index++) {
                    paginationArray.push({ id: index + 1, text: (index + 1).toString(), isActive: false, show: false });
                    if (activePaginationIndex === index) { paginationArray[index].isActive = true; }
                    if (index === newData - 1) { paginationArray.push({ id: 'dots', text: '...', isActive: false, disabled: true }); }
                }
                break;
            case 'string':
                paginationArray.push({ err: newData });
                break;
            default:
                console.error("Something went wrong in the SetPaginationArray");
                paginationArray.push({ err: newData });
                break;
        }
    } else {
        switch (typeof newData) {
            case 'number':
                for (let index = 0; index < newData; index++) {
                    paginationArray.push({ id: index + 1, text: (index + 1).toString(), isActive: false, show: false });
                    if (activePaginationIndex === index) { paginationArray[index].isActive = true; }
                    if (index < 10) { paginationArray[index].show = true; }
                }
                break;
            case 'string':
                paginationArray.push({ err: newData });
                break;
            default:
                console.error("Something went wrong in the SetPaginationArray");
                paginationArray.push({ err: newData });
                break;
        }
    }

    return paginationArray;
}

SetPaginationArray.propTypes = {
    numberOfTabs: PropTypes.number.isRequired,
    activePaginationIndex: PropTypes.number.isRequired,
    errorMessage: PropTypes.string.isRequired,
    paginationImages: PropTypes.arrayOf(PropTypes.string),
    typeOfPagination: PropTypes.string.isRequired,
};