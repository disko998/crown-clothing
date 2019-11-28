import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

export const CartIconComponent = ({itemsCount, ...otherProps}) => {
    return (
        <div className='cart-icon' {...otherProps}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    itemsCount: selectCartItemsCount(state)
})

export const CartIcon = connect(mapStateToProps)(CartIconComponent)
