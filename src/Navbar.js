import React,{Component} from 'react';
import NavbarItem from './NavbarItem';
import { ReactComponent as Logo } from './assets/logo_2.svg';

class Navbar extends Component {
      static defaultProps = {
            items:['Home','WorkShop','Events','Contact']
      }
      render() {
            const {items} = this.props;
            return(
                  <section className='navbar'>
                        <a className='navbar__logoContainer' href='#'>
                              <Logo className='navbar__image' />
                              <h2 className='heading--2 heading--2-primary'>ElectroFocus</h2>
                        </a>
                        <ul className='navbar__nav'>
                             {items.map(item => <NavbarItem item={item} key={item} />)} 
                             <li className='navbar__item'>
                                    <a href='#' className='btn navbar__link--register'>Register</a>
                              </li>
                        </ul>
                  </section>
            )
      }
}

export default Navbar;