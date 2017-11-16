import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

  renderUser() {
    if(this.props.auth) {
      return (
        <li>
          <a href="/api/logout">Logout</a>
        </li>
      );
    }

    return (
      <li>
        <a href="/auth/google/">Sign in With Google</a>
      </li>
    );
  }

  render () {
    //console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo left">Survey-Emaily</Link>
          <ul  className="right">
            {this.renderUser()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProp (/*state*/ { auth }){
  // return { auth: state.auth}
  return { auth }
}

export default connect(mapStateToProp)(Header);
