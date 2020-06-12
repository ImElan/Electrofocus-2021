import React from 'react';

// =============> Components <============
import Header from '../Components/Header/Header';
import Features from '../Components/Features/Features';
import WorkShops from '../Components/WorkShop/WorkShops';
import Banner from '../Components/Banner/Banner';
import Sponsors from '../Components/Sponsors/Sponsors';
import Events from '../Components/Events/Events';
import FeedBacks from '../Components/FeedBack/FeedBacks';
import FrequentlyAskedQuestions from '../Components/FAQ/FrequentlyAskedQuestions';
import Footer from '../Components/Footer/Footer';

// =============> Data <=============
import workshop from '../Data/workshop';
import event from '../Data/event';
import faq from '../Data/faq';
import banner from '../Data/banner';
import features from '../Data/features';
import feedback from '../Data/feedback';
import sponsor from '../Data/sponsor';
import {homePageHeader} from '../Data/header';

function Home() {
      return (
          <div className="container">
                <Header {...homePageHeader} />
                <Features {...features} />
                <Banner {...banner}/>
                <WorkShops {...workshop} />
                <Sponsors {...sponsor} />
                <Events {...event} />
                <FrequentlyAskedQuestions {...faq} />
                <FeedBacks {...feedback}/>
                <Footer />
          </div>
      );
    }
    
    export default Home;