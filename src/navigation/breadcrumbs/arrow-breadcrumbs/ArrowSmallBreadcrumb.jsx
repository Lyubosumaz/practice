import React from 'react';
import CreateArrowBreadcrumbButtons from '../CreateArrowBreadcrumbButtons';
import SetBreadcrumbsButtons from '../SetBreadcrumbsArray';
import breadcrumb from '../breadcrumb.json';

export default function ArrowSmallBreadcrumb() {
    const componentNumber = breadcrumb.ArrowSmallBreadcrumb;
    const validation = componentNumber >= 1 && componentNumber <= 10;
    const number = validation
        ? componentNumber
        : breadcrumb.errorMessage;
    return (
        <CreateArrowBreadcrumbButtons arraySections={SetBreadcrumbsButtons({ numberOfBreadcrumb: number })} />
    );
}