import React,{Component} from 'react';
import Agenda from './Agenda';
import Requirements from './Requirements';
import Details from './Details';

class IndividualWorkShopContainer extends Component {
      render() {
            const { 
                  subtitle,title,requirementsSubTitle,requirementsTitle,detailsSubTitle,detailsTitle 
            } = this.props.info;
            const { price,date,time,venue,agenda,requirements } = this.props;
            return(
                  <div className='individualWorkShop'>
                        {/* Agenda */}
                        <div className='individualWorkShop__agendaContainer'>
                              <h4 className='heading--4 heading--4-dark text-center'>{subtitle}</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>{title}</h1>
                              <div className='individualWorkShop__agendas'>
                                    {agenda.map( singleAgenda => (
                                          <Agenda agenda={singleAgenda} />
                                    ))}
                              </div>
                        </div>
                        {/* Requirements */}
                        <div className='individualWorkShop__requirementContainer'>
                              <h4 className='heading--4 heading--4-dark text-center'>{requirementsSubTitle}</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>{requirementsTitle}</h1> 
                              <div className='individualWorkShop__requirements'>
                                    {requirements.map( singleRequirement => (
                                          <Requirements requirement={singleRequirement} />
                                    ))}     
                              </div>
                        </div>
                        {/* Details */}
                        <div className='individualWorkShop__detailsContainer'>
                              <h4 className='heading--4 heading--4-dark text-center'>{detailsSubTitle}</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>{detailsTitle}</h1> 
                              <div className='individualWorkShop__details'>
                                         <Details detail={date} icon='calendar' />
                                         <Details detail={time} icon='time' />
                                         <Details detail={price} icon='money' />
                                         <Details detail={venue} icon='location' />
                              </div>
                        </div>
                        {/* BookNow Button */}
                        <button className='btn individualWorkShop__button'>
                              Book Now
                        </button>
                  </div>
            )
      }
}

export default IndividualWorkShopContainer;