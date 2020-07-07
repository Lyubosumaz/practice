import React from 'react';
import CombinedTabWithText from 'navigation/tabs/tabs-with-text';
import CombinedTabWithIcons from 'navigation/tabs/tabs-with-icon';
import PipeBreadcrumb from 'navigation/breadcrumbs/pipe-breadcrumbs/PipeBreadcrumb';
import ArrowBreadcrumb from 'navigation/breadcrumbs/arrow-breadcrumbs/ArrowBreadcrumb';
import CombinedPagination from 'navigation/pagination'
// import FullColorButton from 'elements/big-buttons/color-button/FullColorButton';
import SmallButtons from 'elements/small-buttons/SmallButtons';
import BigButtons from 'elements/big-buttons/BigButtons';
import CombinedButtons from 'elements/combined-buttons/CombinedButtons';

import Inputs from 'forms/Inputs/Inputs'

import './app.scss';
import 'navigation/tabs/tab.scss';
import 'navigation/breadcrumbs/breadcrumbs.scss';
import 'navigation/pagination/pagination.scss';
import 'elements/elements.scss';

import 'forms/Inputs/Inputs.scss';

export default function App() {
  return (
    <div className={`app`}>
      <header className={`app-header-card`}>
        <h1>UI Elements / Navigation</h1>
        <span>Navigation elements tabs, breadcrumbs, pagination</span>
      </header>
      <div className={`app-container`}>
        <div className={`container-wrapper tabs`}>
          <header className={`container-header`}>
            <h2>Tabs</h2>
          </header>
          <section className={`container-body two-columns`}>
            <div style={{ marginRight: `2em` }}>
              < CombinedTabWithText />
            </div>
            <div >
              <CombinedTabWithIcons />
            </div>
          </section>
        </div>
        <div className={`container-wrapper breadcrumbs`}>
          <header className={`container-header`}>
            <h2>Breadcrumbs</h2>
          </header>
          <section className={`container-body`}>
            <PipeBreadcrumb />
            <ArrowBreadcrumb />
          </section>
        </div>
        <div className={`container-wrapper breadcrumbs`}>
          <header className={`container-header`}>
            <h2>Pagination</h2>
          </header>
          <section className={`container-body`}>
            < CombinedPagination />
          </section>
        </div>
      </div>
      <header className={`app-header-card`}>
        <h1>UI Elements / Buttons</h1>
        <span>Different kinds of buttons. Regular, disabled, with icons</span>
      </header>
      <div className={`app-container`}>
        <div className={`container-wrapper big-buttons`}>
          <header className={`container-header`}>
            <h2>Big Buttons</h2>
          </header>
          <section className={`container-body`}>
            <BigButtons />
          </section>
        </div>
        <div className={`container-wrapper big-buttons`}>
          <header className={`container-header`}>
            <h2>Small Buttons</h2>
          </header>
          <section className={`container-body`}>
            <SmallButtons />
          </section>
        </div>
        <div className={`container-wrapper big-buttons`}>
          <header className={`container-header`}>
            <h2>Combined Buttons</h2>
          </header>
          <section className={`container-body`}>
            <CombinedButtons />
          </section>
        </div>
      </div>
      <header className={`app-header-card`}>
        <h1>UI Elements / Forms</h1>
        <span>All kinds of inputs and date pickers with hover, error and basic states</span>
      </header>
      <div className="section">
        <h2>Inputs</h2>
        <Inputs />
      </div>
    </div >
  );
}