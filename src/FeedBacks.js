import React,{Component} from 'react';
import feedbackImage from './assets/review.png';
import FeedbackBox from './FeedbackBox';
import arrowSprite from './assets/arrow_sprite.svg';

class FeedBacks extends Component {
      render() {
            return(
                  <section className='feedbacks'>
                        <div className='feedbacks__image'>
                              <img className='feedbacks__image--img' src={feedbackImage} alt='reviews' />
                        </div>
                        <div className='feedbacks__content'>
                              <h4 className='heading--4 heading--4-dark text-center'>Testimonials</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>Our Clients Love Us</h1>
                              <div className='feedbacks__carousel'>
                                    <div className='feedbacks__carouselContainer'>
                                          <ul className='feedbacks__carouselTrack'>
                                                <FeedbackBox />
                                          </ul>
                                    </div>
                              </div>
                              <div className='feedbacks__buttons'>      
                                    <button className='feedbacks__button feedbacks__button--left'>
                                          <svg className='feedbacks__button--img'>
                                                <use xlinkHref={`${arrowSprite}#left`}/>
                                          </svg>
                                    </button>
                                    <button className='feedbacks__button feedbacks__button--right'>
                                          <svg className='feedbacks__button--img'>
                                                <use xlinkHref={`${arrowSprite}#right`}/>
                                          </svg>
                                    </button>
                              </div>
                        </div>
                  </section>
            )
      }
}

export default FeedBacks;