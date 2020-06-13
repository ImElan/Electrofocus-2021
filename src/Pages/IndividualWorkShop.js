import React,{Component} from 'react';

// =============> Component <=================
import Header from '../Components/Header/Header';
import IndividualWorkShopContainer from '../Components/IndividualWorkShopPageComponent/IndividualWorkShopContainer';
import Footer from '../Components/Footer/Footer';

// =============> Data <================
import {singleWorkShopPageInfo} from '../Data/workshop';

class IndividualWorkShop extends Component {
      render() {
            const { 
                  name,infoDetails,price,date,time,venue,infoImage,imageWidth,agenda,requirements 
            } = this.props;
            return(
                  <div className='container container--individualWorkShop'>
                        <Header 
                              title={name} 
                              content={infoDetails}
                              isHomePage={false}
                              image={infoImage}
                              imageWidth={imageWidth}
                        />
                        <IndividualWorkShopContainer 
                              info={singleWorkShopPageInfo} 
                              agenda={agenda} 
                              requirements={requirements}
                              time={time}
                              date={date}
                              venue={venue}
                              price={price}
                        />
                        <Footer />
                  </div>
            )
      }
}

export default IndividualWorkShop;

/* title:'WorkShops',
      content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      isHomePage:false,
      image:workshop,
      imageWidth:'80%' */