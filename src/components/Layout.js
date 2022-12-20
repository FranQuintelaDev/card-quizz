import React, { Component } from 'react';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className='rows main primary-color'>
        <div className='pd-x'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
