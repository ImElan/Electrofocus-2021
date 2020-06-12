import React,{Component} from 'react';
import SingleWorkShopInfoDetails from './SingleWorkShopInfoDetails';

class SingleWorkShopInfoCard extends Component {
      render() {
            const { name,infoDetails,price,date,time,venue,infoImage,index } = this.props;
            let imagePosition, contentPosition, imagePadding, contentPadding;

            if(index % 2 == 1) {
                  imagePosition = 2;
                  contentPosition = 1;
                  imagePadding= '8rem'
                  contentPadding= '0rem'
            } else {
                  imagePosition = 1;
                  contentPosition = 2;
                  imagePadding= '0rem'
                  contentPadding= '8rem'
            }

            return(
                  <div className='workshopInfoContainer__singleInfoCard'>
                        <h3 className='workshopInfoContainer__name'>{name}</h3>
                        <div 
                              className='workshopInfoContainer__image' 
                              style={
                                          {
                                                gridColumn:`${imagePosition} / span 1`,
                                                paddingLeft: imagePadding
                                          }
                                    }
                        >
                              <img 
                                    className='workshopInfoContainer__image--img' 
                                    src={infoImage} 
                                    alt='web dev workshop'
                              />
                        </div>
                        <div 
                              className='workshopInfoContainer__content'
                              style={
                                          {     
                                                gridColumn:`${contentPosition} / span 1`,
                                                paddingLeft: contentPadding
                                          }
                                    }
                        >
                              <h3 className='workshopInfoContainer__about'>{infoDetails}</h3>
                              <div className='workshopInfoContainer__details'>
                                    <SingleWorkShopInfoDetails info={date} icon='calendar' />
                                    <SingleWorkShopInfoDetails info={time} icon='time' />
                                    <SingleWorkShopInfoDetails info={price} icon='money' />
                                    <SingleWorkShopInfoDetails info={venue} icon='location' />
                              </div>
                              <div className='workshopInfoContainer__buttons'>
                                    <button 
                                          className='btn workshopInfoContainer__button workshopInfoContainer__button--moreDetails'>
                                          View More Details
                                    </button>
                                    <button 
                                          className='btn workshopInfoContainer__button workshopInfoContainer__button--bookNow'>
                                          Book Now
                                    </button>
                              </div>
                        </div>
                  </div>
            )
      }
}

export default SingleWorkShopInfoCard;