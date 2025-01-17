import React,{Component} from 'react';

// ============> Components <=================
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import WorkShopInfoContainer from '../Components/WorkShopPageComponent/WorkShopInfoContainer';

// ============> Data <=============
import workshop from '../Data/workshop';
import {workShopPageHeader} from '../Data/header';
import {workShopPageInfo} from '../Data/workshop';

class WorkShop extends Component {
      render() {
            const workshops = workshop.workshops;
            return(
                  <div className='container container--workshop'>
                       <Header {...workShopPageHeader} /> 
                       <WorkShopInfoContainer info={workShopPageInfo} data={workshops} route='workshops' />
                       <Footer />
                  </div>
            )
      }
}

export default WorkShop;