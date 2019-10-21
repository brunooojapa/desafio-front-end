import React, { Component } from 'react';
import './index.css';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';
import { Snackbar } from '@material-ui/core';

class Card extends Component {
  state = {
    show: false,
    message: 'GOTCHA! Now Check your pokédex Store!'
  };
  componentDidMount() {
    console.log('this.props.store');

    console.log(!this.props.listStore.list.name);
  }

  pokeball = () => {
    let poke = [];
    poke.push(this.props.listStore.list);
    this.props.addPokemon(poke);
    this.props.loading(true);
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 2000);
  };
  render() {
    return (
      <div>
        {!this.props.listStore.list.name ? (
          <p>'pokédex is empty'</p>
        ) : (
          <div>
            <img
              className='list-img'
              alt={this.props.listStore.list.name}
              title={this.props.listStore.list.name}
              src={
                !this.props.listStore.list.sprites
                  ? 'https://ubisafe.org/images/film-vector-flat-2.png'
                  : this.props.listStore.list.sprites.front_default
              }
            ></img>
            <h2>{this.props.listStore.list.name}</h2>
            <button
              className='nes-btn is-success'
              onClick={() => this.pokeball()}
            >
              CATCH!
            </button>
            <Snackbar
              open={this.state.show}
              ContentProps={{ 'aria-describedby': 'message-id' }}
              message={<span id='message-id'>{this.state.message}</span>}
            />
          </div>
        )}
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
)(Card);
