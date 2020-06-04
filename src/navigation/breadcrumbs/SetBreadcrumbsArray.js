import breadcrumb from './breadcrumb.json';

export default function CreateBreadcrumbsButtons(props) {
    let breadcrumbArray = [];
    if (typeof props.numberOfBreadcrumb === 'number') {
        for (let index = 0; index < props.numberOfBreadcrumb; index++) {
            breadcrumbArray.push({ id: index, name: breadcrumb.breadSections[index] });
        }
    } else if (typeof props.numberOfBreadcrumb === 'string') {
        breadcrumbArray.push({ err: props.numberOfBreadcrumb });
    } else { console.error("Something went wrong in the SetBreadcrumbsArray"); }
    return breadcrumbArray;
}