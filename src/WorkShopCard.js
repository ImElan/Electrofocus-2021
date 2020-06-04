import React,{Component} from 'react';
import WorkShopCardDetails from './WorkShopCardDetails';

class WorkShopCard extends Component {
      render() {
            const {name,details,image,price,date,time,venue} = this.props;
            return(
                  <div className='workshopCard'>
                        <img className='workshopCard__image' src={image} alt={name} />
                        <div className='workshopCard__titleContainer'>
                              <h4 className='workshopCard__titleContainer--title'>{name}</h4>
                        </div>
                        <p className='workshopCard__details'>{details}</p>
                        <div className='workshopCard__infos'>
                              <WorkShopCardDetails info={date} icon='calender' />
                              <WorkShopCardDetails info={time} icon='clock' />
                              <WorkShopCardDetails info={price} icon='rupee' />
                              <WorkShopCardDetails info={venue} icon='map' />
                        </div>
                  </div>
            )
      }
}

export default WorkShopCard;