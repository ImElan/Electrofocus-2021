import React,{Component} from 'react'
import feedbackSprite from './assets/feedback_sprite.svg';

class FeedbackDetails extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  slideWidth:null
            }
            this.widthRef = React.createRef();
            this.handleResize = this.handleResize.bind(this);
      }

      componentDidMount() {
            console.log('Will Mount');
            const slideWidth = this.widthRef.current.clientWidth;
            this.setState({
                  slideWidth:slideWidth
            }, () => {
                  this.props.changeAmountToMove(this.state.slideWidth)
            });

            window.addEventListener('resize',this.handleResize);
      }

      componentWillUnmount() {
            window.removeEventListener('resize',this.handleResize);
      }

      handleResize() {
            console.log('Resized...')
            const slideWidth = this.widthRef.current.clientWidth;
            this.setState({
                  slideWidth:slideWidth
            }, () => {
                  this.props.changeAmountToMove(this.state.slideWidth)
            });
      }

      render() {
            const { review,name,college,gender,index } = this.props;
            const { slideWidth } = this.state;
            const amountToMove = index * slideWidth;
            return(
                  <li className='feedbacks__carouselSlide' ref={this.widthRef} style={{left:`${amountToMove+4}px`}}>
                        <p className='feedbacks__carouselSlide-review'>{review}</p>
                        <div className='feedbacks__carouselSlide-info'>
                              <svg className='feedbacks__carouselSlide-image'>
                                    <use xlinkHref={`${feedbackSprite}#${gender}`}/>
                              </svg>
                              <div className='feedbacks__carouselSlide-details'>
                                  <p className='feedbacks__carouselSlide-name'>{name}</p>  
                                  <p className='feedbacks__carouselSlide-college'>{college}</p>  
                              </div>
                        </div>
                  </li>
            ) 
      }
}

export default FeedbackDetails;