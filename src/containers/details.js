import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import * as listActions from '../actions/listActions';
import { connect } from 'react-redux';
import CardList from '../components/CardList';

class detailsContainer extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <main className='wrapper'>
          <Header />
          <CardList />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listStore: state.list
});

const mapDispachToProps = dispatch => bindActionCreators(listActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(detailsContainer);
