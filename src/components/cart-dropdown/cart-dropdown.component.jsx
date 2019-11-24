import React from 'react'

import './cart-dropdown.styles.scss'
import {CustomButton} from '../index'

export const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
