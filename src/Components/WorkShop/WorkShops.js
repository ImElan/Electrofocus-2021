import React,{Component} from 'react';
import WorkShopCard from './WorkShopCard';
import web from '../../assets/web_dev.png';
import arduino from '../../assets/arduino.jpg';
import ai from '../../assets/ai.jpg';

class WorkShops extends Component {
      static defaultProps = {
            workshops:[
                  {
                        name:'Web Development',
                        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio nec.',
                        image:web, 
                        price:'749',
                        date:'Jan 12',
                        time:'10.00 AM',
                        venue:'DSP Lab'
                  },
                  {
                        name:'Arduino',
                        details:'Are you new to robotics and arduino ? Don\'t know where to start with ? Well then,this workshop is for you.',
                        image:arduino, 
                        price:'849',
                        date:'Jan 13',
                        time:'10.00 AM',
                        venue:'VLSI Lab'
                  },
                  {
                        name:'Artificial Intelligence',
                        details:'Do you keep hearing about Artificial Intelligence? What\'s all the fuss about it ? Come find out..!',
                        image:ai, 
                        price:'749',
                        date:'Jan 13',
                        time:'9.00 AM',
                        venue:'LHC 201'
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
                        <button className='btn workshops__button'>Explore More WorkShops</button>
                  </section>
            )
      }
}

export default WorkShops;