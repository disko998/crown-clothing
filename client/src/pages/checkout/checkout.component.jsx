import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './checkout.styles.scss'
import {
    selectCartItems,
    selectCartItemsTotal,
} from '../../redux/cart/cart.selectors'
import { CheckoutItem, StripeCheckoutButton } from '../../components'

export const CheckoutPageComponent = ({ createItem, totalAmount }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {createItem.map(item => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}

            <div className='total'>TOTAL: {totalAmount} RSD</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton price={Math.floor(totalAmount * 0.0094)} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    createItem: selectCartItems,
    totalAmount: selectCartItemsTotal,
})

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent)
