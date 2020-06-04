import React from 'react';
import CreateArrowBreadcrumb from './CreateArrowBreadcrumb'


export default function ArrowLargeBreadcrumb() {

    const sections = [
        { id: 1, name: 'First Section' },
        { id: 2, name: 'Second Section' },
        { id: 3, name: 'Third Section' },
        { id: 4, name: 'Fourth Section' },
    ];

    return (
        <CreateArrowBreadcrumb arraySections={sections} />
    );
}