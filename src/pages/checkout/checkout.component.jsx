import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './checkout.styles.scss'
import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors'
import {CheckoutItem} from '../../components'

export const CheckoutPageComponent = ({createItem, totalAmount}) => {
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
            {
                createItem.map(item =>
                    <CheckoutItem key={item.id} cartItem={item} />
                )
            }

            <div className='total'>
                <span className='total'>TOTAL: ${totalAmount}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    createItem: selectCartItems,
    totalAmount: selectCartItemsTotal,
}) 

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent)