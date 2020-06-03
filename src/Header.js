import React,{Component} from 'react';
import Navbar from './Navbar';

class Header extends Component {
      render() {
            return(
                  <section className='header'>
                        <Navbar />
                        <div className='header__content'>
                              Header Content
                        </div>
                        <div className='header__image'>
                              Header Image
                        </div>
                  </section>
            )
      }
}

export default Header;