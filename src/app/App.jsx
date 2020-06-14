import React from 'react';
import TabsWithText from '../navigation/tabs/tabs-with-text/TabsWithText';
import TabsWithIcons from '../navigation/tabs/tabs-with-icon/TabsWithIcons';
import PipeBreadcrumb from '../navigation/breadcrumbs/pipe-breadcrumbs/PipeBreadcrumb';
import ArrowBreadcrumb from '../navigation/breadcrumbs/arrow-breadcrumbs/ArrowBreadcrumb';
import NumberPagination from '../navigation/pagination/number-pagination/NumberPagination';
import ArrowPagination from '../navigation/pagination/arrow-pagination/ArrowPagination';
import WordPagination from '../navigation/pagination/word-pagination/WordPagination';
import DotPagination from '../navigation/pagination/dot-pagination/DotPagination';
import DashPagination from '../navigation/pagination/dash-pagination/DashPagination';
import ButtonPagination from '../navigation/pagination/button-pagination/ButtonPagination';
import FullColorButton from '../elements/big-buttons/color-button/FullColorButton';
import SmallButtons from '../elements/small-buttons/SmallButtons';

import './app.scss';
// Tabs
import '../navigation/tabs/tab-content.scss';
import '../navigation/tabs/tabs-with-text/tabs-with-text.scss';
import '../navigation/tabs/tabs-with-icon/tabs-with-icon.scss';
// Breadcrumbs
import '../navigation/breadcrumbs/pipe-breadcrumbs/pipe-breadcrumbs.scss';
import '../navigation/breadcrumbs/arrow-breadcrumbs/arrow-breadcrumbs.scss'
// Pagination
import '../navigation/pagination/arrow-pagination/arrow-pagination.scss';
import '../navigation/pagination/word-pagination/word-pagination.scss';
// Simple Pagination
import '../navigation/pagination/number-pagination/number-pagination.scss';
import '../navigation/pagination/dot-pagination/dot-pagination.scss';
import '../navigation/pagination/button-pagination/button-pagination.scss';
import '../navigation/pagination/dash-pagination/dash-pagination.scss';

import '../elements/big-buttons/big-button.scss';
import '../elements/small-buttons/small-button.scss';

export default function App() {
  return (
    <div className="app">
      <SmallButtons />
      <FullColorButton />
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
              <NumberPagination />
            </div>
            <div className="multi-line-position">
              <ArrowPagination />
            </div>
            <div className="multi-line-position">
              <WordPagination />
            </div>
          </div>
          <div className="one-line">
            <div className="one-line-position">
              <DotPagination />
            </div>
            <div className="one-line-position">
              <ButtonPagination />
            </div>
            <div className="one-line-position">
              <DashPagination />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}