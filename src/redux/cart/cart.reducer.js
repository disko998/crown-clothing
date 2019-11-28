import {CartActionTypes} from './cart.types'
import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_DROPDOWN:
            return {...state, hidden: !state.hidden}
        case CartActionTypes.ADD_ITEM:
            return {...state, items: addItemToCart(state.items, action.payload)}
        default:
            return state
    }
}

export default cartReducer