import React, { Component } from 'react';
import '../styles/App.css';


class BaseLayout extends Component {
  render() {
    return (
      <div className="base">
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
