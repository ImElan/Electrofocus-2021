import React,{Component} from 'react';

class WorkShopCardDetails extends Component {
      render() {
            const {info,icon} = this.props;
            return(
                  <div className='workshopCard__infos--container'>
                        <p className='workshopCard__infos--container_icon'>{icon}</p>
                        <p className='workshopCard__infos--container_info'>{info}</p>
                  </div>
            )
      }
}

export default WorkShopCardDetails;