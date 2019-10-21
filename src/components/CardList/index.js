import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';
import { ListItem, List, Divider } from '@material-ui/core';

class CardList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    show: false,
    message: 'GOTCHA! Now Check your pokédex Store!'
  };
  componentDidMount() {
    console.log('this.props.addPokemon');

    console.log(this.props.listStore.addPokemon);
  }

  removePokemon(id) {
    console.log(id);
  }

  details = value => {
    console.log('details');
    console.log(value);
    this.props.itemDetails(value);
  };
  render() {
    return (
      <div className='container'>
        <div className='list'>
          {!this.props.listStore.addPokemon ||
          this.props.listStore.addPokemon.length === 0 ? (
            <ListItem className='list-item' dense button>
              <div className='list-item_text'>
                <h2 className='item-title'>Pokédex is empty</h2>
              </div>
            </ListItem>
          ) : (
            <List>
              {this.props.listStore.addPokemon.map((value, key) => (
                <div key={key}>
                  <ListItem
                    key={value.length}
                    className='list-item'
                    dense
                    button
                  >
                    <img
                      className='list-img'
                      alt={value.title}
                      title={value.title}
                      src={
                        !value.sprites
                          ? 'https://ubisafe.org/images/film-vector-flat-2.png'
                          : value.sprites.front_default
                      }
                    />

                    <div className='list-item_text'>
                      <h2 className='item-title'>
                        {value.id} -{value.name}{' '}
                      </h2>
                      <Link to='/cardDetails'>
                        <button
                          className='nes-btn is-primary'
                          onClick={() => this.details(value)}
                        >
                          Details
                        </button>
                      </Link>
                      <Link>
                        <button
                          className='nes-btn is-error'
                          onClick={() => this.removePokemon(value.id)}
                        >
                          Remove!
                        </button>
                      </Link>
                    </div>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          )}
        </div>
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
)(CardList);
