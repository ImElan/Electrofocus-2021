import React,{Component} from 'react';
import RuleBox from './RuleBox';
import Details from '../IndividualWorkShopPageComponent/Details';

class IndividualEventContainer extends Component {
      render() {
            const {date,time,venue,rules,studentsPerTeam} = this.props;
            const {detailsSubTitle,detailsTitle} = this.props.info;

            return(
                  <div className='individualEvent'>
                        <h2 
                              className='heading--2 heading--2-primary text-center'
                        >
                              Students Per Team : {studentsPerTeam}
                        </h2>
                        {/* RuleBoxes goes here */}
                        <div className='individualEvent__rulesContainer'>
                              {rules.map( (rule,index) => (
                                    <RuleBox {...rule} key={index}/>
                              ))}
                        </div>
                        {/* Details Box Goes here */}
                        <div className='individualWorkShop__detailsContainer'>
                              <h4 className='heading--4 heading--4-dark text-center'>{detailsSubTitle}</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>{detailsTitle}</h1> 
                              <div className='individualWorkShop__details'>
                                         <Details detail={date} icon='calendar' />
                                         <Details detail={venue} icon='location' />
                                         <Details detail={time} icon='time' />
                              </div>
                        </div>
                  </div>
            )
      }
}

export default IndividualEventContainer;