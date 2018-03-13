import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import ProductList from './ProductList';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import CartList from './CartList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar /><CartButton />
        {this.props.cart ? <CartList /> : 
          <div>
            <h3>These goods slap:</h3> 
            <ProductList searchTerm={this.props.search} products={this.props.products} /> 
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
