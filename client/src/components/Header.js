import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

  renderUser() {
    if(this.props.auth) {
      return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }

    return (
      <li key='3'>
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
