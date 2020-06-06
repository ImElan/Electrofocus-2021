import React,{ Component } from "react";

class NavbarItem extends Component {
      render() {
            const {item} = this.props;
            return(
                  <li className='navbar__item'>
                        <a href='#' className='navbar__link'>{item}</a>
                  </li>
            )
      }
}

export default NavbarItem;