export const addItemToCart = (cartItems, itemToAdd) => {
    const isItemExist = cartItems.find(item => item.id === itemToAdd.id)

    if (isItemExist) {
        return cartItems.map(item => {
            if (item.id === itemToAdd.id) {
                return {...item, quantity: ++item.quantity}
            }else {
                return item
            }
        })
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}