import React,{Component} from 'react';

// ============> Components <=================
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import WorkShopInfoContainer from '../Components/WorkShopPageComponent/WorkShopInfoContainer';

// ============> Data <=============
import event from '../Data/event';
import {nonTechEventPageHeader} from '../Data/header';
import {eventsPageInfo} from '../Data/event';

class NonTechEvents extends Component {
      render() {
            const events = event.nonTechEvents;
            return(
                  <div className='container container--workshop'>
                       <Header {...nonTechEventPageHeader} /> 
                       <WorkShopInfoContainer info={eventsPageInfo} data={events} route='nonTechEvents' />
                       <Footer />
                  </div>
            )
      }
}

export default NonTechEvents;