import React, { Component } from 'react';

export class Evolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChainLoaded: false,
      evolutionChain: []
    };
  }

  componentDidMount() {
    this.getEvolution(this.props.id);
  }

  getEvolution(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(response => response.json())
      .then(data => {
        return fetch(data.evolution_chain.url)
          .then(response => response.json())
          .then(data => {
            let evoChain = [];
            let evoData = data.chain;

            do {
              let numberOfEvolutions = evoData['evolves_to'].length;
              let evoDetails = evoData['evolution_details'][0];

              evoChain.push({
                species_name: evoData.species.name,
                min_level: !evoDetails ? 1 : evoDetails.min_level,
                trigger_name: !evoDetails ? null : evoDetails.trigger.name,
                item: !evoDetails ? null : evoDetails.item
              });

              if (numberOfEvolutions > 1) {
                for (let i = 1; i < numberOfEvolutions; i++) {
                  let evoDetailsX =
                    evoData.evolves_to[i]['evolution_details'][0];
                  evoChain.push({
                    species_name: evoData.evolves_to[i].species.name,
                    min_level: !evoDetailsX ? 1 : evoDetailsX.min_level,
                    trigger_name: !evoDetailsX
                      ? null
                      : evoDetailsX.trigger.name,
                    item: !evoDetailsX ? null : evoDetailsX.item
                  });
                }
              }

              evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

            this.setState({ isChainLoaded: true, evolutionChain: evoChain });
          });
      });
  }

  renderEvolutionChain() {
    if (!this.state.evolutionChain) return;

    let evoChainList = [];
    this.state.evolutionChain.map(item => {
      evoChainList.push(
        <div key={item.species_name}>
          {!item.item ? (
            <p>
              {item.species_name} at level {item.min_level}
            </p>
          ) : (
            <p>
              {item.species_name} using {item.item.name}
            </p>
          )}
        </div>
      );
    });

    return evoChainList;
  }

  render() {
    let { isChainLoaded } = this.state;

    return (
      <div>
        {isChainLoaded
          ? this.renderEvolutionChain()
          : 'Loading Evolution Chain...'}
      </div>
    );
  }
}
