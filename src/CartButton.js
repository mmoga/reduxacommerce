import React from 'react';

import { connect } from 'react-redux';
import { cartActions } from './cart/';

const CartList = props => {
    return (
        <button onClick={() => props.toggleCart()}>CART ICON</button>
    );
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
    return {
        toggleCart: toggle => dispatch(cartActions.toggleCart(toggle))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);