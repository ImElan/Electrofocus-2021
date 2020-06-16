import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

import social_media from '../../assets/social_sprite.svg';

class Footer extends Component {
      render() {
            return(
                  <section className='footer'>
                        <h2 className='heading--2 heading--2-light'>ElectroFocus</h2>
                        <ul className='footer__list'>
                              <NavLink 
                                    exact
                                    to='/accomodation'
                                    className='footer__list--item'
                              >
                                    Accomodation
                              </NavLink>
                              <NavLink 
                                    exact
                                    to='/contact/faq'
                                    className='footer__list--item'
                              >
                                    Contact Us
                              </NavLink>
                              <li className='footer__list--item'>Reviews</li>
                              <li className='footer__list--item'>FAQ</li>
                              <li className='footer__list--item'>Privacy Policy</li>
                        </ul>
                        <div className='footer__socialMedia'>
                              <a href='https://www.facebook.com/electrofocus.in/' className='footer__socialMedia_icon'>
                                    <svg className='footer__socialMedia_icon-fb'>
                                          <use xlinkHref={`${social_media}#facebook`} />
                                    </svg>
                              </a>
                              <a href='https://www.instagram.com/eea.mit/?hl=en' className='footer__socialMedia_icon'>
                                    <svg className='footer__socialMedia_icon-insta'>
                                          <use xlinkHref={`${social_media}#instagram`} />
                                    </svg>
                              </a>
                        </div>
                        <p className='footer__copyright'>&copy; Copyright 2020, ElectroFocus Inc. All Rights Reserved.</p>
                  </section>
            )
      }
}

export default Footer;