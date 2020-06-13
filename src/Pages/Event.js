import React,{Component} from 'react';

import Navbar from '../Components/Navbar/Navbar';
import TechNonTechContainer from '../Components/EventsPage/TechNonTechContainer';

class Event extends Component {     
      render() {
            return(
                  <div className='container container--techNonTech'>
                        <Navbar />
                        <TechNonTechContainer />
                  </div>
            )
      }
}

export default Event;