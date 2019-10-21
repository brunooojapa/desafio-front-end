import React, { Component } from 'react';
import { ChipSet, Chip } from '@material/react-chips';
import Axios from 'axios';

export class Types extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemonsType: [] };
  }

  componentDidMount() {
    this.getPokemonsType(this.props.typeURL);
  }

  getPokemonsType(typeURL) {
    if (!typeURL) return;
    return Axios.get(typeURL)
      .then(response => response)
      .then(data => {
        this.setState({ pokemonsType: data.pokemon });
      });
  }

  renderPokemonTypes() {
    if (!this.props.types) return;

    let listTypes = [];

    this.props.types.map(item => {
      listTypes.push(
        <Chip
          label={item.type.name}
          id={item.type.name}
          key={item.type.name}
          onClick={() => this.getPokemonsType(item.type.url)}
        />
      );
    });
    return <ChipSet choice>{listTypes}</ChipSet>;
  }

  renderPokemonsType() {
    if (!this.state.pokemonsType) return;

    let pokemonsTypeList = [];

    this.state.pokemonsType.map(item => {
      pokemonsTypeList.push(
        <button key={item.pokemon.name}>{item.pokemon.name}</button>
      );
    });

    return pokemonsTypeList;
  }

  render() {
    return (
      <div>
        {this.renderPokemonTypes()}
        {this.state.pokemonsType ? this.renderPokemonsType() : ''}
      </div>
    );
  }
}
