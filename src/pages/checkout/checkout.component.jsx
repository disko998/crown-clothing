import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors'
import './checkout.styles.scss'

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
                    item.name
                )
            }

            <div className='total'>
                <span>TOTAL: {totalAmount}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    createItem: selectCartItems,
    totalAmount: selectCartItemsTotal,
}) 

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageComponent)