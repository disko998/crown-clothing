import React from 'react'

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

export const CartIcon = ({label, ...otherProps}) => {
    return (
        <div className='cart-icon' {...otherProps}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>{label}</span>
        </div>
    )
}
