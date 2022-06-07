import React from 'react';
import SecondaryNavigation from '../SecondaryNavigation/SecondaryNavigation';
import Header from '../Header/Header';
import CreateSection from '../CreateSection/CreateSection';
import Spacer from '../Spacer/Spacer';

//css
import './Layout.css';

// import GlobalStyles from '../../GlobalStyles';

function Layout() {
  return (
    <div className="wrapper">
      <div className="navigation-container">
        <SecondaryNavigation />
      </div>
      <div className="main-container">
        <Header />
        <CreateSection />
      </div>
      <div className="footer-container">
        <Spacer />
      </div>
    </div>
  );
};

export default Layout;