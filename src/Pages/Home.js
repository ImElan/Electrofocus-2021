import React from 'react';
import Header from '../Components/Header/Header';
import Features from '../Components/Features/Features';
import WorkShops from '../Components/WorkShop/WorkShops';
import Banner from '../Components/Banner/Banner';
import Sponsors from '../Components/Sponsors/Sponsors';
import Events from '../Components/Events/Events';
import FeedBacks from '../Components/FeedBack/FeedBacks';
import FrequentlyAskedQuestions from '../Components/FAQ/FrequentlyAskedQuestions';
import Footer from '../Components/Footer/Footer';

function Home() {
      return (
          <div className="container">
                <Header />
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
    
    export default Home;