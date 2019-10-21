import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

class indexContainer extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <main className='wrapper'>
          <Header />
          <SearchBar />

          <Card />
        </main>
      </div>
    );
  }
}

export default indexContainer;
