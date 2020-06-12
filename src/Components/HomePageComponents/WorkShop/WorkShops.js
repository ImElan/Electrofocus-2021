import React,{Component} from 'react';
import WorkShopCard from './WorkShopCard';

class WorkShops extends Component {
      render() {
            const {workshops} = this.props;
            return(
                  <section className='workshops'>
                        <div>
                              <h1 className='features__heading heading--1 heading--1-dark'>WorkShops</h1>
                        </div>
                        <div className='workshops__cards'>
                              {workshops.slice(0,3).map( (workshop,index) => ( 
                                    <WorkShopCard {...workshop} key={index}/>
                              ))}
                        </div>
                        <button className='btn workshops__button'>Explore More WorkShops</button>
                  </section>
            )
      }
}

export default WorkShops;