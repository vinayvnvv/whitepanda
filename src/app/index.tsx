import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Jobs } from './modules/jobs';
import { AppHeader } from './containers/app-header/app-header';
import { AppTabs } from './containers/app-tabs/app-tabs';
const WhitePandaApp: React.FC = () => {
    return (
        <Router>
          <div className="App">
            <AppHeader />
            <AppTabs />
            <div className="app-content">
              <div className="app-layout">
                <Route path="/" exact component={Jobs} />
                <Route path="/search" exact component={Search} />
                <Route path="/shop" exact component={Shop} />
              </div>
            </div>
          </div>
        </Router>
    );
}

const Search: React.FC = () => (
  <h1 className="slide-up">Search</h1>
);
const Shop: React.FC = () => (
  <h1 className="slide-up">Shop</h1>
);
export default WhitePandaApp;