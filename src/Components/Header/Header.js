import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar';

class Header extends Component {
      render() {
            const {title,content,image,isHomePage,imageWidth} = this.props;
            return(
                  <section className='header'>
                        <Navbar />
                        <div className='header__content'>
                              <h1 className='heading--1 heading--1-dark'>{title}</h1>
                              <h3 className='heading--3 heading--3-dark'>{content}</h3>
                              {
                                    isHomePage && <button className='btn header__content--btn header__content--btn_secondary'>Register Now</button>
                              }
                        </div>
                        <div className='header__image'>
                              <img 
                                    className='header__image--img' 
                                    style={{width:imageWidth}} 
                                    src={image} 
                                    alt='Header'>
                              </img>
                        </div>
                  </section>
            )
      }
}

export default Header;