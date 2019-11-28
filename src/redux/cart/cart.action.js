import {CartActionTypes} from './cart.types'

export const toggleDropdown = () => ({
    type: CartActionTypes.TOGGLE_DROPDOWN
})

export const addItemToCart = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearCartItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})

export const removeCartItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})