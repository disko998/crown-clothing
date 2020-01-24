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

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id)

    if (existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems.map(item => {
        return item.id === itemToRemove.id 
        ? {...item, quantity: --item.quantity}
        : item
    })

}