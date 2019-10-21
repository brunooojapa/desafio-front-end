import React, { Component } from 'react';
import { LinearProgress, Snackbar } from '@material-ui/core';
import './index.css';
import serviceAPI from '../../services/api';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';

class SearchBar extends Component {
  state = {
    loading: false
  };
  constructor(props) {
    super(props);
    console.log(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.setState({ loading: true });
    e.preventDefault();

    serviceAPI
      .getPokemonsById(this.refs.name.value)
      .then(response => {
        console.log(response);
        this.setState({
          loading: false,
          show: false
        });
        console.log(response);
        this.props.addList([response]);
      })
      .catch(error => {
        console.log('==== response  error====');
        console.log(error);
        this.setState({
          message: 'Sorry, Ash, we have a problem.',
          loading: false,
          show: true
        });
        // set modal hide
        setTimeout(() => {
          this.setState({ show: false });
        }, 2000);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='search-group'>
            <input
              type='text'
              ref='name'
              className='search-input'
              placeholder='pikachu'
            />
            <button type='submit' className='nes-btn'>
              <i>search</i>
            </button>
          </div>
          <Snackbar
            open={this.state.show}
            ContentProps={{ 'aria-describedby': 'message-id' }}
            message={<span id='message-id'>{this.state.message}</span>}
          />
          {this.state.loading ? <LinearProgress /> : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispachToProps = dispatch => bindActionCreators(listActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(SearchBar);
