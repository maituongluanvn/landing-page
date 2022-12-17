import React, { Component } from 'react';
import Router from 'next/router';

export default class _error extends Component {
  componentDidMount = () => {
    // redirect to 404 page
    Router.push('/');
  };

  render() {
    return <div />;
  }
}
