import React from 'react';

import { connect } from 'react-redux';
import { cartActions } from './cart/';

import cartImage from './images/808667-24.png';

const CartButton = props => {
    return (
        <button className="CartButton--button" onClick={() => props.toggleCart()}><img src={cartImage} alt="shopping cart" /></button>
    );
}

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        toggleCart: toggle => dispatch(cartActions.toggleCart(toggle))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);