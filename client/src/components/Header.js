import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">Survey-Emaily</a>
          <ul  className="right">
            <li><a>Sign in With Google</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
