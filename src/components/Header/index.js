import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='hero-header'>
        <AppBar position='static' color='default' className='header'>
          <Toolbar>
            <Link to='/'>
              <div className='logo'>
                <i class='nes-ash'></i>
                <h1> PokeDex v1.0 </h1>
              </div>
            </Link>
            {this.props.listStore.loading === false ? null : (
              <Link to='/details'>
                <div className='btn-store'>
                  <h1>Store</h1>
                  <i class='nes-pokeball'></i>
                </div>
              </Link>
            )}
          </Toolbar>
        </AppBar>
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
)(Header);
