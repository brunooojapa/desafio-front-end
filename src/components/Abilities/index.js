import React, { Component } from 'react';
import Axios from 'axios';

export class Abilities extends Component {
  constructor(props) {
    super(props);
    this.state = { abilityShortEffect: '', showShortEffect: false };
  }

  getAbilityShortEffect(url) {
    return Axios.get(url)
      .then(response => response)
      .then(data => {
        this.setState({
          showShortEffect: true,
          abilityShortEffect: data.effect_entries[0].short_effect
        });
      });
  }

  renderAbilities(abilities) {
    if (!abilities) return;
    let abilitiesList = [];

    abilities.map(item => {
      if (item.is_hidden === true) return false;

      abilitiesList.push(
        <div key={item.ability.name}>
          <button
            outlined
            onClick={() => this.getAbilityShortEffect(item.ability.url)}
          >
            {item.ability.name}
          </button>
          {this.state.showShortEffect && <p>{this.state.abilityShortEffect}</p>}
        </div>
      );
    });

    return abilitiesList;
  }

  render() {
    let { abilities } = this.props;

    return <div>{this.renderAbilities(abilities)}</div>;
  }
}
