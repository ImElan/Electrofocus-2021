import React, {Component} from 'react';
import SingleWorkShopInfoCard from './SingleWorkShopInfoCard';

class WorkShopInfoContainer extends Component {
      render() {
            const { subtitle,title,detail } = this.props.info;
            const { workshops } = this.props;
            return(
                  <div className='workshopInfoContainer'>
                        <div className='workshopInfoContainer__heading'>
                              <h4 className='heading--4 heading--4-dark text-center'>{subtitle}</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>{title}</h1>
                              <h3 className='heading--3 heading--3-dark events__content--subtitle'>{detail}</h3>
                              <div className='workshopInfoContainer__dots'>
                                    <div className='workshopInfoContainer__dot'></div>
                                    <div className='workshopInfoContainer__dot'></div>
                                    <div className='workshopInfoContainer__dot'></div>
                                    <div className='workshopInfoContainer__dot'></div>
                              </div>
                        </div>
                        <div className='workshopInfoContainer__workshops'>
                              {workshops.map( (workshop,index) => (
                                    <SingleWorkShopInfoCard {...workshop} index={index} key={workshop.name} />
                              ))}
                        </div>
                  </div>
            )
      }
}

export default WorkShopInfoContainer;