import React from 'react';
// import CreatePageBar from '../CreatePageBar'

export default function SimpleDotPagination() {
    const pages = [
        { id: 1, isActive: true },
        { id: 2, },
        { id: 3, },
    ];

    return (
        <nav className="pagination-dots">
            <div className="pagination-dots-wrapper">
                {pages.map(page =>
                    <button className={`pagination-dots-buttons ${page.isActive ? 'active-dot-button' : ''}`}></button>
                )}
            </div>
        </nav>
    );
}