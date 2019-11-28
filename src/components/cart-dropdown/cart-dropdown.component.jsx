import React from 'react'
import {connect} from 'react-redux'

import './cart-dropdown.styles.scss'
import {CustomButton, CartItem} from '../index'
import {selectCartItems} from '../../redux/cart/cart.selectors'

export const CartDropdownComponent = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export const CartDropdown = connect(mapStateToProps)(CartDropdownComponent)
