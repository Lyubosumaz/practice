import React, { Fragment } from 'react';
import CreateBreadcrumbButtons from '../CreateBreadcrumbButtons';
import SetBreadcrumbsArray from '../SetBreadcrumbsArray';
import randomNumberGen from '../../../utils/randomNumberGen';
import breadcrumb from '../breadcrumb.json';

export default function PipeBreadcrumb() {
    return (
        <Fragment key={randomNumberGen()}>
            {breadcrumb.pipeBreadcrumbs.map((element, index) => {
                return (
                    <div key={randomNumberGen()} className="multi-line-position breadcrumbs-position">
                        <CreateBreadcrumbButtons
                            key={index}
                            type={element.type}
                            array={SetBreadcrumbsArray({ numberOfBreadcrumbs: element.quantity })}
                        />
                    </div>
                );
            })}
        </Fragment >
    );
}