import React, { Component } from 'react';
import { ChipSet, Chip } from '@material/react-chips';

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
    return fetch(typeURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemonsType: data.pokemon });
      });
  }

  renderPokemonTypes() {
    if (!this.props.types) return;

    let typesList = [];

    this.props.types.map(item => {
      typesList.push(
        <Chip
          onClick={() => this.getPokemonsType(item.type.url)}
          id={item.type.name}
          label={item.type.name}
          key={item.type.name}
        />
      );
    });
    return <ChipSet choice>{typesList}</ChipSet>;
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
