import React from 'react';
import SmallTabText from '../navigation/tabs/text-only/SmallTabText';
import MediumTabText from '../navigation/tabs/text-only/MediumTabText';
import LargeTabText from '../navigation/tabs/text-only/LargeTabText';
import SmallTabWithIcons from '../navigation/tabs/text-with-icons/SmallTabWithIcons';
import MediumTabWithIcons from '../navigation/tabs/text-with-icons/MediumTabWithIcons';
import LargeTabWithIcons from '../navigation/tabs/text-with-icons/LargeTabWithIcons';
import PipeSmallBreadcrumb from '../navigation/breadcrumbs/pipe-breadcrumbs/PipeSmallBreadcrumb';
import PipeMediumBreadcrumb from '../navigation/breadcrumbs/pipe-breadcrumbs/PipeMediumBreadcrumb';
import PipeLargeBreadcrumb from '../navigation/breadcrumbs/pipe-breadcrumbs/PipeLargeBreadcrumb';
import ArrowSmallBreadcrumb from '../navigation/breadcrumbs/arrow-breadcrumbs/ArrowSmallBreadcrumb';
import ArrowMediumBreadcrumb from '../navigation/breadcrumbs/arrow-breadcrumbs/ArrowMediumBreadcrumb';
import ArrowLargeBreadcrumb from '../navigation/breadcrumbs/arrow-breadcrumbs/ArrowLargeBreadcrumb';
import SimplePagination from '../navigation/pagination/numbers-pagination/SimpleNumberPagination';
import SimpleArrowPagination from '../navigation/pagination/arrow-pagination/SimpleArrowPagination';
import SimpleWordPagination from '../navigation/pagination/word-pagination/SimpleWordPagination';
import SimpleDotPagination from '../navigation/pagination/dot-pagination/SimpleDotPagination';
import SimpleDashPagination from '../navigation/pagination/dash-pagination/SimpleDashPagination';
import SimpleButtonPagination from '../navigation/pagination/button-pagination/SimpleButtonPagination';

import './app.scss';
import '../navigation/tabs/text-only/tabs-text.scss';
import '../navigation/tabs/text-with-icons/tabs-with-icons.scss';
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
            <div>
              <div className="multi-line-position tab-position">
                <SmallTabText />
              </div>
              <div className="multi-line-position tab-position">
                <MediumTabText />
              </div>
              <div className="multi-line-position tab-position">
                <LargeTabText />
              </div>
            </div>
            <div>
              <div className="multi-line-position tab-position">
                <SmallTabWithIcons />
              </div>
              <div className="multi-line-position tab-position">
                <MediumTabWithIcons />
              </div>
              <div className="multi-line-position tab-position">
                <LargeTabWithIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs section">
        <h2>Breadcrumbs</h2>
        <div className="container">
          <div className="multi-line">
            <div className="multi-line-position breadcrumbs-position">
              <PipeSmallBreadcrumb />
            </div>
            <div className="multi-line-position breadcrumbs-position">
              <PipeMediumBreadcrumb />
            </div>
            <div className="multi-line-position breadcrumbs-position">
              <PipeLargeBreadcrumb />
            </div>
          </div>
          <ArrowSmallBreadcrumb />
          <ArrowMediumBreadcrumb />
          <ArrowLargeBreadcrumb />
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