import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <p>item ordered : <span>{props.cart.length}</span> </p>
        </div>
    );
};

export default Cart;