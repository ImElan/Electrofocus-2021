import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import SingleWorkShopInfoDetails from './SingleWorkShopInfoDetails';

class SingleWorkShopInfoCard extends Component {
      render() {
            const { name,infoDetails,price,date,time,venue,infoImage,index,imageWidth,id } = this.props;
            let imagePosition, contentPosition, imagePadding, contentPadding, colorStart, colorEnd;
            if(index % 2 === 1) {
                  imagePosition = 2;
                  contentPosition = 1;
                  imagePadding= '8rem'
                  contentPadding= '0rem'
                  colorEnd='#E2E8F0'
                  colorStart='#EDF2F7'
            } else {
                  imagePosition = 1;
                  contentPosition = 2;
                  imagePadding= '0rem'
                  contentPadding= '8rem'
                  colorEnd='#EDF2F7'
                  colorStart='#E2E8F0'
            }

            return(
                  <div 
                        className='workshopInfoContainer__singleInfoCard'
                        style={
                              {
                                    backgroundImage: `
                                          linear-gradient(
                                                to right,
                                                ${colorStart} 0%,
                                                ${colorStart} 50%,
                                                ${colorEnd} 50%
                                          )
                                    `
                              }
                        }
                  >
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
                                    style={{width:imageWidth}}
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
                                    <NavLink 
                                          className='btn workshopInfoContainer__button workshopInfoContainer__button--moreDetails'
                                          exact
                                          to={`/workshops/${id}`}      
                                    >
                                          View More Details
                                    </NavLink>
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