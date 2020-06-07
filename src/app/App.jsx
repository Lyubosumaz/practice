import React from 'react';
import TabsWithText from '../navigation/tabs/tabs-with-text/TabsWithText';
import TabsWithIcons from '../navigation/tabs/tabs-with-icon/TabsWithIcons';
import PipeBreadcrumb from '../navigation/breadcrumbs/pipe-breadcrumbs/PipeBreadcrumb';
import ArrowBreadcrumb from '../navigation/breadcrumbs/arrow-breadcrumbs/ArrowBreadcrumb';
import SimplePagination from '../navigation/pagination/numbers-pagination/SimpleNumberPagination';
import SimpleArrowPagination from '../navigation/pagination/arrow-pagination/SimpleArrowPagination';
import SimpleWordPagination from '../navigation/pagination/word-pagination/SimpleWordPagination';
import SimpleDotPagination from '../navigation/pagination/dot-pagination/SimpleDotPagination';
import SimpleDashPagination from '../navigation/pagination/dash-pagination/SimpleDashPagination';
import SimpleButtonPagination from '../navigation/pagination/button-pagination/SimpleButtonPagination';

import './app.scss';
import '../navigation/tabs/tab-content.scss';
import '../navigation/tabs/tabs-with-text/tabs-with-text.scss';
import '../navigation/tabs/tabs-with-icon/tabs-with-icon.scss';
import '../navigation/breadcrumbs/pipe-breadcrumbs/pipe-breadcrumbs.scss';
import '../navigation/breadcrumbs/arrow-breadcrumbs/arrow-breadcrumbs.scss'
import '../navigation/pagination/numbers-pagination/pagination-numbers.scss';
import '../navigation/pagination/arrow-pagination/pagination-arrow.scss';
import '../navigation/pagination/word-pagination/pagination-words.scss';
import '../navigation/pagination/dot-pagination/pagination-dot.scss';
import '../navigation/pagination/dash-pagination/pagination-dash.scss';
import '../navigation/pagination/button-pagination/pagination-button.scss';

export default function App() {
  return (
    <div className="app">
      <div className="tabs section">
        <h2>Tabs</h2>
        <div className="container">
          <div className="multi-line two-columns">
            <div className="column">
              <TabsWithText />
            </div>
            <div className="column">
              <TabsWithIcons />
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs section">
        <h2>Breadcrumbs</h2>
        <div className="container">
          <div className="multi-line">
            <PipeBreadcrumb />
            <ArrowBreadcrumb />
          </div>
        </div>
      </div>
      <div className="pagination section">
        <h2>Pagination</h2>
        <div className="container">
          <div className="multi-line">
            <div className="multi-line-position">
              <SimplePagination />
            </div>
            <div className="multi-line-position">
              <SimpleArrowPagination />
            </div>
            <div className="multi-line-position">
              <SimpleWordPagination />
            </div>
          </div>
          <div className="one-line">
            <div className="one-line-position">
              <SimpleDotPagination />
            </div>
            <div className="one-line-position">
              <SimpleButtonPagination />
            </div>
            <div className="one-line-position">
              <SimpleDashPagination />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}