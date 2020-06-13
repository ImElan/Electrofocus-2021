import React,{Component} from 'react';

// ============> Components <=================
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import WorkShopInfoContainer from '../Components/WorkShopPageComponent/WorkShopInfoContainer';

// ============> Data <=============
import event from '../Data/event';
import {techEventPageHeader} from '../Data/header';
import {eventsPageInfo} from '../Data/event';

class TechEvents extends Component {
      render() {
            const events = event.techEvents;
            return(
                  <div className='container container--workshop'>
                       <Header {...techEventPageHeader} /> 
                       <WorkShopInfoContainer info={eventsPageInfo} data={events} route='techEvents' />
                       <Footer />
                  </div>
            )
      }
}

export default TechEvents;