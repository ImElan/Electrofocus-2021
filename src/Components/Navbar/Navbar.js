import React,{Component} from 'react';
import NavbarItem from './NavbarItem';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo_2.svg';

class Navbar extends Component {
      static defaultProps = {
            items:[
                  {name:'Home',link:''},
                  {name:'Workshops',link:'/workshops'},
                  {name:'Events',link:'/tech-nonTech-events'},
                  {name:'Contact',link:'/contact'}
            ]
      }
      render() {
            const {items} = this.props;
            return(
                  <section className='navbar'>
                        <NavLink className='navbar__logoContainer' to='/'>
                              <div className='navbar__imageContainer'>
                                    <Logo className='navbar__image' />
                              </div>
                              <h2 className='heading--2 heading--2-primary'>ElectroFocus</h2>
                        </NavLink>
                        <ul className='navbar__nav'>
                             {items.map(item => <NavbarItem name={item.name} link={item.link} key={item.name} />)} 
                             <li className='navbar__item'>
                                    <a href='/' className='btn navbar__link--register'>Register</a>
                              </li>
                        </ul>
                  </section>
            )
      }
}

export default Navbar;