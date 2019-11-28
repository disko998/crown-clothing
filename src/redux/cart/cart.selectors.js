import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.items
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    items => items.reduce((count, item) => item.quantity + count ,0)
)

export const selectCartHidden = createSelector(
    selectCart,
    cart => cart.hidden
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    items => items.reduce((count, item) => item.quantity * item.price + count ,0)
)