import React,{Component} from 'react';
import Agenda from './Agenda';

class IndividualWorkShopContainer extends Component {
      render() {
            const { subtitle,title } = this.props.info;
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
                        {/* Details */}
                        {/* BookNow Button */}
                  </div>
            )
      }
}

export default IndividualWorkShopContainer;