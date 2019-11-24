import React from 'react'

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

export const CartIcon = (props) => {
    return (
        <div className='cart-icon' {...props}>
            <ShoppingBag className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}
