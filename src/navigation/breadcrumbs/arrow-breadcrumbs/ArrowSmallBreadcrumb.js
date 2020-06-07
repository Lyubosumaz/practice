import React from 'react';
import CreateBreadcrumbButtons from '../CreateBreadcrumbButtons';
import SetBreadcrumbsArray from '../SetBreadcrumbsArray';
import breadcrumb from '../breadcrumb.json';

export default function ArrowSmallBreadcrumb() {
    const breadcrumbClass = 'breadcrumb-arrow';
    const componentNumber = breadcrumb.ArrowSmallBreadcrumb;
    const validation = componentNumber >= 1 && componentNumber <= 10;
    const number = validation ? componentNumber : breadcrumb.errorMessage;
    return (
        <CreateBreadcrumbButtons arraySections={SetBreadcrumbsArray({ numberOfBreadcrumb: number })} class={breadcrumbClass} />
    );
}