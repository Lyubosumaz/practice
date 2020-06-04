import React from 'react';
import CreatePipeBreadcrumbButtons from '../CreatePipeBreadcrumbButtons';
import SetBreadcrumbsButtons from '../SetBreadcrumbsArray';
import breadcrumb from '../breadcrumb.json';

export default function PipeSmallBreadcrumb() {
    const componentNumber = breadcrumb.PipeSmallBreadcrumb;
    const validation = componentNumber >= 1 && componentNumber <= 10;
    const number = validation
        ? componentNumber
        : breadcrumb.errorMessage;
    return (
        <CreatePipeBreadcrumbButtons arraySections={SetBreadcrumbsButtons({ numberOfBreadcrumb: number })} />
    );
}