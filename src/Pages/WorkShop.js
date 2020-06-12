import React,{Component} from 'react';

// ============> Components <=================
import Header from '../Components/Header/Header';

// ============> Data <=============
import {workShopPageHeader} from '../Data/header';

class WorkShop extends Component {
      render() {
            return(
                  <div className='container'>
                       <Header {...workShopPageHeader} /> 
                  </div>
            )
      }
}

export default WorkShop;