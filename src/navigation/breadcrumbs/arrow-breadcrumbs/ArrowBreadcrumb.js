import React, { Fragment } from 'react';
import CreateBreadcrumbButtons from '../CreateBreadcrumbButtons';
import SetBreadcrumbsArray from '../SetBreadcrumbsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import breadcrumb from '../breadcrumb.json';

export default function ArrowBreadcrumb() {
    return (
        <Fragment key={randomNumberGen()}>
            {breadcrumb.arrowBreadcrumbs.map((element, index) => {
                return (
                    <CreateBreadcrumbButtons
                        key={index}
                        type={element.type}
                        array={SetBreadcrumbsArray({ numberOfBreadcrumbs: element.quantity })}
                    />
                );
            })}
        </Fragment>
    );
}