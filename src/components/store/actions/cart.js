const Add = (cart, product) => {
    return{
        type: 'ADD_TO_CART',
        cart,
        product
    }
}

const AddItem = (cart, product) => {
    return{
        type: 'ADD_ITEM',
        cart,
        product
    }
}

const RemoveItem = (cart, product) => {
    return{
        type: 'REMOVE_ITEM',
        cart,
        product
    }
}

const DeleteItem = (cart, product) => {
    return{
        type: 'DELETE_ITEM',
        cart,
        product
    }
}

const ChangeCart = (localCart) => {
    return{
        type: 'CHANGE_CART',
        localCart
    }
}

export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ChangeCart
}
