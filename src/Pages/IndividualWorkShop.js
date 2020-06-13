import React,{Component} from 'react';

// =============> Component <=================
import Header from '../Components/Header/Header';

// =============> Data <================

class IndividualWorkShop extends Component {
      render() {
            const { 
                  name,infoDetails,price,date,time,venue,infoImage,index,imageWidth,id,agenda,requirements 
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