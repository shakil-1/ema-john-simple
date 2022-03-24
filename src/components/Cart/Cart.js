import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
        console.log(cart);
    }
    const text =parseFloat((total * 0.1).toFixed(0));
    const grandTotal = total + shipping + text;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total price : ${total}</p>
            <p>Total Shipping :${shipping}</p>
            <p>Text :${text}</p>
            <h5>Grant Total :${grandTotal.toFixed(0)}</h5>
        </div>
    );
};

export default Cart;