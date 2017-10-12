import React, { Component } from 'react';
import '../styles/App.css';


class BaseLayout extends Component {
  render() {
    // console.log("this.props.children here >>>", this.props.children)
    return (
      <div className="base">
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
