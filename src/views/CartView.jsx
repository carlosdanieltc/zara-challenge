import React from 'react';
import './CartView.css'
import { Link } from 'react-router-dom';

const CartView = () => {
  return (
    <div className='cart-container'>
        <div className='cart-items-container'>
            <h2 className='cart-items'>CART (00)</h2>
            <div className='phone-cards'></div>
        </div>
        <div className='cart-options'>
            <Link to="/">
            <div className='back-button-container'>
                <button className='button-back'>CONTINUE SHOPPING</button>
            </div>
            </Link>
            
            <div className='pay-container'>
                <p>TOTAL 0</p>
                <button className='button-pay'>PAY</button>
            </div>
        </div>
    </div>
  );
}

export default CartView;
