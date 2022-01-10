import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    const formatRound = (num) => {
        const rounded = num.toFixed(2)
        num = Number(rounded)
        return num;
    }
    
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping =  12.99;
    }
    else if(total > 12){
        shipping = 4.99;
    }
    else{
        shipping = 0;
    }
    let total_with_shipping = total+ shipping;

    let tax = total/10;
    let grand_total = total + shipping + tax

    


    return (
        <div className='cart-info'>
            <h2>Order Summery</h2>
            <p>item ordered: <span>{cart.length}</span> </p>
            <table>
                <tr>
                    <td>item:</td>
                    <td>$ {formatRound(total)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td>$ {shipping}</td>
                </tr>
                <tr>
                    <td>Total before tax:</td>
                    <td>$ {formatRound(total_with_shipping)} </td>
                </tr>
                <tr>
                    <td>Estimated Tax:</td>
                    <td>$ {formatRound(tax)}</td>
                </tr>
                <tr className='order-total'>
                    <td>Order Total:</td>
                    <td>$ {formatRound(grand_total)}</td>
                </tr>
            </table>
            <button className='cart_button'>Review your order</button>
        </div>
    );
};

export default Cart;