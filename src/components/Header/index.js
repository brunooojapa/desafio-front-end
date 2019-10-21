import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css';
import SearchBar from '../SearchBar';

class Header extends Component {
  render() {
    return (
      <div className='hero-header'>
        <AppBar position='static' color='default' className='header'>
          <Toolbar>
            <Link to='/'>
              <h1>PokeDex v1.0</h1>
            </Link>
            <SearchBar />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
