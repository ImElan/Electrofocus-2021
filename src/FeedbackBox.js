import React,{Component} from 'react'
import FeedbackDetails from './FeedbackDetails';
import arrowSprite from './assets/arrow_sprite.svg';

class FeedbackBox extends Component {
      static defaultProps = {
            reviews: [
                  {
                        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
                        name:'Marques Brown Lee',
                        college:'Princeton University',
                        gender:'man'
                  },
                  {
                        review:'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                        name:'Rachel',
                        college:'Drama School',
                        gender:'woman'
                  },
                  {
                        review:'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
                        name:'Dave Lee',
                        college:'University of Toronto',
                        gender:'man'
                  },
                  {
                        review:'Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Quis imperdiet massa tincidunt nunc pulvinar sapien. Pulvinar proin gravida hendrerit lectus. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer',
                        name:'Linus Tech Tips',
                        college:'University of Toronto',
                        gender:'man'
                  },
            ]
      }
      
      constructor(props) {
            super(props);
            this.state = {
                  currentSlide:1,
                  slideWidth:null,
                  amountToMove: 0
            }
            this.handleNextButton = this.handleNextButton.bind(this);
            this.handlePreviousButton = this.handlePreviousButton.bind(this);
            this.changeAmountToMove = this.changeAmountToMove.bind(this);
      }

      handleNextButton() {
            const distance = this.state.currentSlide * this.state.slideWidth;
            this.setState( curState => (
                  {
                        amountToMove:distance,
                        currentSlide: curState.currentSlide + 1
                  }
            ))
      }

      handlePreviousButton() {
            const distance = (this.state.currentSlide -2 ) * this.state.slideWidth;
            this.setState( curState => (
                  {
                        amountToMove:distance,
                        currentSlide: curState.currentSlide - 1
                  }
            ))
      }

      changeAmountToMove(value) {
            this.setState({
                  slideWidth:value
            });
      }

      render() {
            const { reviews } = this.props;
            const { amountToMove,currentSlide } = this.state;
            return(
                  <div className='feedbacks__content'>
                              <h4 className='heading--4 heading--4-dark text-center'>Testimonials</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>Our Clients Love Us</h1>
                              <div className='feedbacks__carousel'>
                                    <div className='feedbacks__carouselContainer'>
                                          <ul 
                                                className='feedbacks__carouselTrack' 
                                                style={{transform:`translateX(-${amountToMove}px)`}}
                                          >
                                                {reviews.map( (review,index) => (
                                                      <FeedbackDetails 
                                                            {...review} 
                                                            key={review.name} 
                                                            index={index} 
                                                            changeAmountToMove={this.changeAmountToMove}
                                                      />
                                                ))}
                                          </ul>
                                    </div>
                              </div>
                              <div className='feedbacks__buttons'>      
                                    <button 
                                          className={`feedbacks__button feedbacks__button--left ${currentSlide <= 1 && 'feedbacks__button--disabled'}`}
                                          onClick={this.handlePreviousButton}
                                          disabled = {currentSlide <= 1}
                                    >
                                          <svg className='feedbacks__button--img'>
                                                <use xlinkHref={`${arrowSprite}#left`}/>
                                          </svg>
                                    </button>
                                    <button 
                                          className={`feedbacks__button feedbacks__button--right ${currentSlide >= reviews.length && 'feedbacks__button--disabled'}`}
                                          onClick={this.handleNextButton}
                                          disabled={currentSlide >= reviews.length}
                                    >
                                          <svg className='feedbacks__button--img'>
                                                <use xlinkHref={`${arrowSprite}#right`}/>
                                          </svg>
                                    </button>
                              </div>
                        </div>
            ) 
      }
}

export default FeedbackBox;