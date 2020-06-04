import React,{Component} from 'react';
import WorkShopCard from './WorkShopCard';
import web from './assets/web_dev.png';
import arduino from './assets/robot.png';
import ai from './assets/ai.png';

class WorkShops extends Component {
      static defaultProps = {
            workshops:[
                  {
                        name:'Web Development',
                        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
                        image:web, 
                        price:'749',
                        date:'Jan 12',
                        time:'10.00 AM',
                        venue:'DSP Lab, Department Of Electronics'
                  },
                  {
                        name:'Arduino',
                        details:'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
                        image:arduino, 
                        price:'849',
                        date:'Jan 13',
                        time:'10.00 AM',
                        venue:'VLSI, Department Of Electronics'
                  },
                  {
                        name:'Artificial Intelligence',
                        details:'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                        image:ai, 
                        price:'749',
                        date:'Jan 13',
                        time:'9.00 AM',
                        venue:'Lecture Hall 201'
                  }
            ]
      }
      render() {
            const {workshops} = this.props;
            return(
                  <section className='workshops'>
                        <div>
                              <h1 className='features__heading heading--1 heading--1-dark'>WorkShops</h1>
                        </div>
                        <div className='workshops__cards'>
                              {workshops.map( (workshop,index) => ( 
                                    <WorkShopCard {...workshop} key={index}/>
                              ))}
                        </div>
                  </section>
            )
      }
}

export default WorkShops;