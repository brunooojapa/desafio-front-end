import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';

class indexContainer extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <main className='wrapper'>
          <Header />
        </main>
      </div>
    );
  }
}

export default indexContainer;
