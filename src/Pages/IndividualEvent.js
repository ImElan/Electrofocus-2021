import React,{Component} from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import IndividualEventContainer from '../Components/IndividualEventPageComponent/IndividualEventContainer';

import {singleWorkShopPageInfo} from '../Data/workshop';

class IndividualEvent extends Component {
      render() {
            const { 
                  name,infoDetails,date,time,venue,infoImage,imageWidth,rules,studentsPerTeam 
            } = this.props;
            return(
                  <div className='container container--individualEvent'>
                        <Header
                              title={name} 
                              content={infoDetails}
                              isHomePage={false}
                              image={infoImage}
                              imageWidth={imageWidth}
                        />
                        <IndividualEventContainer 
                              info={singleWorkShopPageInfo}
                              rules={rules}
                              date={date}
                              time={time}
                              venue={venue}
                              studentsPerTeam={studentsPerTeam}
                        />
                        <Footer />
                  </div>
            )
      }
}

export default IndividualEvent;