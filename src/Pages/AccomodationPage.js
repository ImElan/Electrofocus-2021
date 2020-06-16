import React,{ Component } from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

import { accomodationPageHeader } from '../Data/header';

class AccomodationPage extends Component {
      render() {
            return(
                  <div className='container container--accomodation'>
                      <Header {...accomodationPageHeader} />
                      <Footer />
                  </div>
            )
      }
}

export default AccomodationPage;