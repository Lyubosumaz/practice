import React from 'react';
import CreatePipeBreadcrumb from './CreatePipeBreadcrumb';

export default function PipeSmallBreadcrumb() {
    const sections = [
        { id: 1, name: 'First Section' },
        { id: 2, name: 'Second Section' },
        { id: 3, name: 'Third Section' },
    ];

    return (
        <CreatePipeBreadcrumb arraySections={sections} />
    );
}