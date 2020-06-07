import PropTypes from "prop-types";
import breadcrumb from './breadcrumb.json';

export default function SetBreadcrumbsArray({ numberOfBreadcrumbs }) {
    let breadcrumbArray = [];
    const validation = numberOfBreadcrumbs >= 1 && numberOfBreadcrumbs <= 10;
    const newData = validation ? numberOfBreadcrumbs : breadcrumb.errorMessage;

    switch (typeof newData) {
        case 'number':
            for (let index = 0; index < newData; index++) {
                breadcrumbArray.push({ id: index, name: breadcrumb.breadSections[index] });
            }
            break;
        case 'string':
            breadcrumbArray.push({ err: newData });
            break;
        default:
            console.error("Something went wrong in the SetBreadcrumbsArray");
            breadcrumbArray.push({ err: newData });
            break;
    }

    return breadcrumbArray;
}

SetBreadcrumbsArray.propTypes = {
    numberOfBreadcrumbs: PropTypes.number.isRequired,
};