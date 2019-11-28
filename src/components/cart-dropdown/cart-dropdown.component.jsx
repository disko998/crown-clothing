import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import './cart-dropdown.styles.scss'
import {CustomButton, CartItem} from '../index'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleDropdown} from '../../redux/cart/cart.action'

export const CartDropdownComponent = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ?
                    cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                )):
                <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleDropdown())
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export const CartDropdown = withRouter(connect(mapStateToProps)(CartDropdownComponent))
