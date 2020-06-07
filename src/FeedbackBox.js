import React,{Component} from 'react'
import Slider from './Slider';

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

      render() {
            const { reviews } = this.props;
            return(
                  <div className='feedbacks__content'>
                              <h4 className='heading--4 heading--4-dark text-center'>Testimonials</h4>
                              <h1 className='heading--1 heading--1-dark text-center'>Our Clients Love Us</h1>
                              <Slider reviews={reviews} />
                        </div>
            ) 
      }
}

export default FeedbackBox;