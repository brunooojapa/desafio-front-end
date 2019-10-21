import React, { Component } from 'react';
import './index.css';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';
import { Types } from '../Types';
import { Abilities } from '../Abilities';
import { Evolution } from '../Evolution';
import { Stats } from '../Stats';
import { Divider } from '@material-ui/core';

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

          <div>
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
            <div className='photoUpload'>
              <input
                id='my-upload-btn'
                type='file'
                accept='.jpg, .jpeg, .png'
                onChange={this.handleLoadLocalFile}
              />
            </div>
            <p>weight: {this.props.listStore.itemDetails.weight}</p>
            <p>height: {this.props.listStore.itemDetails.height}</p>
          </div>
          <Divider />
          <div className='blc-left'>
            <h4>Status</h4>
            <Stats stats={this.props.listStore.itemDetails.stats} />
            <h4>Type</h4>
            <Types types={this.props.listStore.itemDetails.types} />
          </div>
          <Divider />
          <div className='blc-right'>
            <h4>Abilities</h4>
            <Abilities abilities={this.props.listStore.itemDetails.abilities} />
            <h4>Evolution</h4>
            <Evolution id={this.props.listStore.itemDetails.id} />
          </div>
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
