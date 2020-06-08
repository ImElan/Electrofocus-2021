import React,{Component} from 'react';
import WorkShopCardDetails from './WorkShopCardDetails';

class WorkShopCard extends Component {
      render() {
            const {name,details,image,price,date,time,venue} = this.props;
            return(
                  <div className='workshopCard'>
                        <img className='workshopCard__image' src={image} alt={name} />
                        <h4 className='workshopCard__title'>{name}</h4>
                        <p className='workshopCard__details'>{details}</p>
                        <WorkShopCardDetails info={date} icon='calendar' />
                        <WorkShopCardDetails info={time} icon='clock' />
                        <WorkShopCardDetails info={price} icon='rupee-indian' />
                        <WorkShopCardDetails info={venue} icon='pin' />
                        <button className='workshopCard__button'>More Details</button>
                  </div>
            )
      }
}

export default WorkShopCard;