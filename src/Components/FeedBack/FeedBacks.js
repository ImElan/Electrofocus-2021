import React,{Component} from 'react';
import FeedbackBox from './FeedbackBox';
import feedbackImage from '../../assets/review.png';

class FeedBacks extends Component {
      render() {
            return(
                  <section className='feedbacks'>
                        <div className='feedbacks__image'>
                              <img className='feedbacks__image--img' src={feedbackImage} alt='reviews' />
                        </div>
                        <FeedbackBox />
                  </section>
            )
      }
}

export default FeedBacks;