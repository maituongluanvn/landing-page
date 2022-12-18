import React, { Component } from 'react';
import Router from 'next/router';

export default class _error extends Component {
  componentDidMount = () => {
    // redirect to 404 page
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Router.push('/');
  };

  render() {
    return <div />;
  }
}
