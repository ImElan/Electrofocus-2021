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
            return(
                  <div className='container container--workshopo'>
                       <Header {...workShopPageHeader} /> 
                       <WorkShopInfoContainer info={workShopPageInfo} {...workshop} />
                       <Footer />
                  </div>
            )
      }
}

export default WorkShop;