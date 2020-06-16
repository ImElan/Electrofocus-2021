import React,{ Component } from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import AccomodationContainer from '../Components/AccomodationPageComponents/AccomodationContainer';

import { accomodationPageHeader } from '../Data/header';
import accomodationData from '../Data/accomodation';

class AccomodationPage extends Component {
      render() {
            return(
                  <div className='container container--accomodation'>
                      <Header {...accomodationPageHeader} />
                      <AccomodationContainer {...accomodationData} />
                      <Footer />
                  </div>
            )
      }
}

export default AccomodationPage;