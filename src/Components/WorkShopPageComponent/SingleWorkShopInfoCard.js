import React,{Component} from 'react';
import SingleWorkShopInfoDetails from './SingleWorkShopInfoDetails';
import webdev from '../../assets/web_development.svg';

class SingleWorkShopInfoCard extends Component {
      render() {
            const {name,infoDetails,price,date,time,venue} = this.props;
            return(
                  <div className='workshopInfoContainer__singleInfoCard'>
                        <h3 className='workshopInfoContainer__name'>{name}</h3>
                        <div className='workshopInfoContainer__image'>
                              <img className='workshopInfoContainer__image--img' src={webdev} alt='web dev workshop'/>
                        </div>
                        <div className='workshopInfoContainer__content'>
                              <h3 className='workshopInfoContainer__about'>{infoDetails}</h3>
                              <div className='workshopInfoContainer__details'>
                                    <SingleWorkShopInfoDetails info={date} icon='calendar' />
                                    <SingleWorkShopInfoDetails info={time} icon='time' />
                                    <SingleWorkShopInfoDetails info={price} icon='money' />
                                    <SingleWorkShopInfoDetails info={venue} icon='location' />
                              </div>
                              <button className='btn workshopInfoContainer__button'>View More Details</button>
                        </div>
                  </div>
            )
      }
}

export default SingleWorkShopInfoCard;