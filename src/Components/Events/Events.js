import React,{Component} from 'react';
import EventBox from './EventBox';

class Events extends Component {
      static defaultProps = {
            title:'20+ Events Spanning 4 Domains',
            subTitle:'If you want to showcase your talent this symposium is one of the best platforms for all the aspiring engineers out there.We\'ve got you covered.',
            techEvents:[
                  {
                        name:'C Struct',
                        icon:'code'
                  },
                  {
                        name:'Circuitology',
                        icon:'circuit'
                  },
                  {
                        name:'Binary Battle',
                        icon:'code-1'
                  },
                  {
                        name:'Work The Network',
                        icon:'router'
                  },
                  {
                        name:'CrypTech',
                        icon:'cryptography'
                  },
                  {
                        name:'Liaise The Link',
                        icon:'wifi'
                  },
                  {
                        name:'Line Follower',
                        icon:'robot'
                  },
            ],
            nonTechEvents:[
                  {
                        name:'Mock IPL Bidding',
                        icon:'cultures'
                  },
                  {
                        name:'Ship Wreck',
                        icon:'actor'
                  },
                  {
                        name:'Voice Over',
                        icon:'studio'
                  },
                  {
                        name:'Just A Minute',
                        icon:'music-and-multimedia'
                  },
                  {
                        name:'Fifa',
                        icon:'games'
                  },
                  {
                        name:'Rubik\'s Cube',
                        icon:'rubik'
                  },
                  {
                        name:'Math Maverick',
                        icon:'abacus'
                  },
            ]
      }
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