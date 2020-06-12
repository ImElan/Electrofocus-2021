import React,{Component} from 'react';
import EventBox from './EventBox';

class Events extends Component {
      render() {
            const {title,subTitle,techEvents,nonTechEvents} = this.props;
            return(
                  <section className='events'>
                        <div className='events__content'>
                              <h2 className='heading--2 heading--2-light'>{title}</h2>
                              <h3 className='heading--3 heading--3-light events__content--subtitle'>{subTitle}</h3>
                              <button className='btn events__content--btn events__content--btn_secondary'>Explore Events</button>
                        </div>
                        <div className='events__list events__list--technical'>
                              {techEvents.map( event => (
                                          <EventBox 
                                                icon={event.icon}
                                                event={event.name} 
                                                key={event.name} 
                                                side='left'/>)
                                          )}
                        </div>
                        <div className='events__list events__list--nonTechnical'>
                              {nonTechEvents.map( event => 
                                          (<EventBox 
                                                icon={event.icon}
                                                event={event.name} 
                                                key={event.name} 
                                                side='right'/>)
                                          )}
                        </div>
                  </section>
            )
      }
}

export default Events;