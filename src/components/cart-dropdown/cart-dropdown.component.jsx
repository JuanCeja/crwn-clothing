import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        (cartItems.map((item) => 
                            <CartItem key={item.id} cartItem={item} />
                        )) : (
                            <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                        )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown