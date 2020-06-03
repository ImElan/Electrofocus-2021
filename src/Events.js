import React,{Component} from 'react';
import EventBox from './EventBox';

class Events extends Component {
      static defaultProps = {
            title:'20+ Events Spanning 4 Domains',
            subTitle:'If you want to showcase your talent this symposium is one of the best platforms for all the aspiring engineers out there.We\'ve got you covered.',
            techEvents:[
                  'C Struct',
                  'Circuitology',
                  'Binary Battle',
                  'Work The Network',
                  'CrypTech',
                  'Liaise The Link',
                  'Line Follower'
            ],
            nonTechEvents:[
                  'Mock IPL Bidding',
                  'Ship Wreck',
                  'Voice Over',
                  'Just A Minute',
                  'Fifa',
                  'Rubik\'s Cube',
                  'Math Maverick'
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
                              {techEvents.map( event => <EventBox event={event} key={event} side='left'/>)}
                        </div>
                        <div className='events__list events__list--nonTechnical'>
                              {nonTechEvents.map( event => <EventBox event={event} key={event} side='right'/>)}
                        </div>
                  </section>
            )
      }
}

export default Events;