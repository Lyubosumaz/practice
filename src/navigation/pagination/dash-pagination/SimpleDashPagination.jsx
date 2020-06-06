import React from 'react';
// import CreatePageBar from '../CreatePageBar'

export default function SimpleDashPagination() {
    const pages = [
        { id: 1, isActive: true },
        { id: 2, },
        { id: 3, },
        { id: 4, },
    ];

    return (
        <nav className="pagination-dash">
            <div className="pagination-dash-wrapper">
                {pages.map(page =>
                    <button key={page.id} className={`pagination-dash-buttons ${page.isActive ? 'active-dot-button' : ''}`}></button>
                )}
            </div>
        </nav>
    );
}