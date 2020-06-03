import React,{Component} from 'react';

class EventBox extends Component {
      render() {
            const {side} = this.props;
            let style = {};
            if(side === 'left') {
                  style = { borderLeft:'5px solid #A8D4FF' }
            } else {
                  style = { borderRight: '5px solid #A8D4FF'}
            }
            const {event} = this.props;
            return(
                  <div className='events__eventBox'style={style}>
                        <p className='events__eventBox--name'>{event}</p>
                  </div>
            )
      }
}

export default EventBox;