import React from 'react';
import leftArrow from '../../../assets/images/pagination/arrow-left-solid.svg';
import rightArrow from '../../../assets/images/pagination/arrow-right-solid.svg';

export default function SimpleButtonPagination() {
    const pages = [
        { id: 1, text: '1', isActive: true },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
        { id: 5, text: '5' },
    ];

    return (
        <nav className="pagination-buttons">
            <div className="pagination-words-left">
                <button className="pagination-buttons-text button-style">
                    <img className="pagination-buttons-svg" src={leftArrow} />
                </button>
            </div>
            {pages.map(page => {
                if (page.isActive) {
                    return (
                        <div key={page.id} className="pagination-buttons-wrapper">
                            <img className="pagination-buttons-svg" src={leftArrow} />
                            <span className="pagination-buttons-info">{page.text}/{pages.length}</span>
                            <img className="pagination-buttons-svg" src={rightArrow} />
                        </div>
                    )
                }
            })}
            <div className="pagination-words-right">
                <button className="pagination-buttons-text button-style">
                    <img className="pagination-buttons-svg" src={rightArrow} />
                </button>
            </div>
        </nav>
    );
}