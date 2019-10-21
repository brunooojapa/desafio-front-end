import React, { Component } from 'react';
import './index.css';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';
import { Types } from '../Types';
import { Abilities } from '../Abilities';
import { PokemonEvolutionChain } from '../Evolution';
import { Stats } from '../Stats';

class cardDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    img: null
  };
  componentDidMount() {
    console.log('this.props.addPokemon2');

    console.log(this.props.listStore.itemDetails);
  }
  handleLoadLocalFile = event => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.onloadend = () => this.setState({ img: reader.result });
      reader.readAsDataURL(file);
    } else {
      alert('invalid.');
    }
  };
  render() {
    return (
      <div className='container'>
        <div className='list'>
          <h1>
            {this.props.listStore.itemDetails.id} -
            {this.props.listStore.itemDetails.name}
          </h1>

          <img
            className='list-img'
            alt={this.props.listStore.itemDetails.name}
            title={this.props.listStore.itemDetails.name}
            src={
              this.state.img === null
                ? this.props.listStore.itemDetails.sprites.front_default
                : this.state.img
            }
          />
          <input
            id='my-upload-btn'
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={this.handleLoadLocalFile}
          />
          <p>weight: {this.props.listStore.itemDetails.weight}</p>
          <p>height: {this.props.listStore.itemDetails.height}</p>
          <Stats stats={this.props.listStore.itemDetails.stats} />
          <Types types={this.props.listStore.itemDetails.types} />
          <Abilities abilities={this.props.listStore.itemDetails.abilities} />
          <PokemonEvolutionChain id={this.props.listStore.itemDetails.id} />
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
)(cardDetails);
