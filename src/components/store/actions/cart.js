const Add = (cart, product) => {
    return{
        type: 'ADD_TO_CART',
        cart,
        product
    }
}

export default {
    Add
}