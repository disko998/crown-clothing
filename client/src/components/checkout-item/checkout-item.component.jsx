import React from 'react'
import {connect} from 'react-redux'

import './checkout-item.styles.scss'
import {addItemToCart ,removeCartItem, clearCartItem} from '../../redux/cart/cart.action'

export const CheckoutItemComponent = ({cartItem, addItem, removeItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const dispatchStateToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeCartItem(item)),
    clearItem: item => dispatch(clearCartItem(item))
}) 

export const CheckoutItem = connect(null, dispatchStateToProps)(CheckoutItemComponent)