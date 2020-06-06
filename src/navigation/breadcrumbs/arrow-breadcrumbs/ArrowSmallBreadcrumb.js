import React from 'react';
import CreateArrowBreadcrumbButtons from '../CreateArrowBreadcrumbButtons';
import SetBreadcrumbsArray from '../SetBreadcrumbsArray';
import breadcrumb from '../breadcrumb.json';

export default function ArrowSmallBreadcrumb() {
    const componentNumber = breadcrumb.ArrowSmallBreadcrumb;
    const validation = componentNumber >= 1 && componentNumber <= 10;
    const number = validation ? componentNumber : breadcrumb.errorMessage;
    return (
        <CreateArrowBreadcrumbButtons arraySections={SetBreadcrumbsArray({ numberOfBreadcrumb: number })} />
    );
}