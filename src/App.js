import React from 'react';
import Header from './Header';
import FeatureHeading from './FeatureHeading';
import Features from './Features';
import WorkShops from './WorkShops';
import Banner from './Banner';
import Sponsors from './Sponsors';
import Events from './Events';
import FeedBacks from './FeedBacks';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import Footer from './Footer';

import './sass/main.scss';

function App() {
  return (
      <div className="container">
            <Header />
            <FeatureHeading />
            <Features />
            <Banner />
            <WorkShops />
            <Sponsors />
            <Events />
            <FrequentlyAskedQuestions />
            <FeedBacks />
            <Footer />
      </div>
  );
}

export default App;
