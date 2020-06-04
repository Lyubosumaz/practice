import React from 'react';
import CreateArrowBreadcrumb from './CreateArrowBreadcrumb'


export default function ArrowSmallBreadcrumb() {

    const sections = [
        { id: 1, name: 'First Section' },
        { id: 2, name: 'Second Section' },
    ];

    return (
        <CreateArrowBreadcrumb arraySections={sections} />
    );
}