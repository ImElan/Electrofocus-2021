import React,{Component} from 'react'
import feedbackSprite from './assets/feedback_sprite.svg';

class FeedbackBox extends Component {
      render() {
            return(
                  <li className='feedbacks__carouselSlide'>
                        <p className='feedbacks__carouselSlide-review'>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.
                        </p>
                        <div className='feedbacks__carouselSlide-info'>
                              <svg className='feedbacks__carouselSlide-image'>
                                    <use xlinkHref={`${feedbackSprite}#man`}/>
                              </svg>
                              <div className='feedbacks__carouselSlide-details'>
                                  <p className='feedbacks__carouselSlide-name'>Name</p>  
                                  <p className='feedbacks__carouselSlide-college'>College</p>  
                              </div>
                        </div>
                  </li>
            ) 
      }
}

export default FeedbackBox;