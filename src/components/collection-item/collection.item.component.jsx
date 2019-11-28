import React from 'react'
import {connect} from 'react-redux'

import './collection-item.styles.scss'
import {CustomButton} from '../index'
import {addItemToCart} from '../../redux/cart/cart.action'

export const CollectionItemComponent = ({item, addToCart}) => {
        const {name, price, imageUrl} = item

        return (
            <div className='collection-item'>
                <div 
                className='image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
                    <CustomButton inverted onClick={() => addToCart(item)} >
                        Add to cart
                    </CustomButton>
                </div>
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
            </div>
        )
    }

const dispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addItemToCart(item))
})

export const CollectionItem = connect(null, dispatchToProps)(CollectionItemComponent)
