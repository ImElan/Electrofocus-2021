import React,{Component} from 'react';
import EventBox from './EventBox';

class Events extends Component {
      static defaultProps = {
            title:'20+ Events Spanning 4 Domains',
            subTitle:'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
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
                              {techEvents.map( event => <EventBox event={event} side='left'/>)}
                        </div>
                        <div className='events__list events__list--nonTechnical'>
                              {nonTechEvents.map( event => <EventBox event={event} side='right'/>)}
                        </div>
                  </section>
            )
      }
}

export default Events;