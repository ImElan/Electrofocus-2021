import React,{Component} from 'react';
import Navbar from './Navbar';
import robot from './assets/header.png';

class Header extends Component {
      static defaultProps = {
            title:'ElectroFocus',
            content:'An Inter College National level technical flamboyance with 20+ events and 8+ workshops. The Symposium is one of the best platforms for all the aspiring engineers to showcase their talents and to those who wish to furnish them.'          
      }
      render() {
            const {title,content} = this.props;
            return(
                  <section className='header'>
                        <Navbar />
                        <div className='header__content'>
                              <h1 className='heading--1'>{title}</h1>
                              <h3 className='heading--3'>{content}</h3>
                              <button className='btn header__content--btn header__content--btn_secondary'>Register Now</button>
                        </div>
                        <div className='header__image'>
                              <img className='header__image--robot' src={robot}></img>
                        </div>
                  </section>
            )
      }
}

export default Header;