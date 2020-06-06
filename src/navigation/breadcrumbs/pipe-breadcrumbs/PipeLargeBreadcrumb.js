import React from 'react';
import CreatePipeBreadcrumbButtons from '../CreatePipeBreadcrumbButtons';
import SetBreadcrumbsArray from '../SetBreadcrumbsArray';
import breadcrumb from '../breadcrumb.json';

export default function PipeLargeBreadcrumb() {
    const componentNumber = breadcrumb.PipeLargeBreadcrumb;
    const validation = componentNumber >= 1 && componentNumber <= 10;
    const number = validation ? componentNumber : breadcrumb.errorMessage;
    return (
        <CreatePipeBreadcrumbButtons arraySections={SetBreadcrumbsArray({ numberOfBreadcrumb: number })} />
    );
}