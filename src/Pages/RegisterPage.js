import React,{Component} from 'react';

import Header from '../Components/Header/Header'; 
import Footer from '../Components/Footer/Footer'; 
import FeedBacks from '../Components/HomePageComponents/FeedBack/FeedBacks';
import RegisterCardsContainer from '../Components/RegisterPage/RegisterCardsContainer';

import { registerPageHeader } from '../Data/header';
import feedbacks from '../Data/feedback';

class RegisterPage extends Component {
      render() {
            return(
                  <div className='container container--register'>
                        <Header {...registerPageHeader} />
                        <RegisterCardsContainer />
                        <FeedBacks {...feedbacks} />
                        <Footer />
                  </div>
            )
      }
}

export default RegisterPage;