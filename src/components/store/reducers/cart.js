import productList from './product';

const INITIAL_STATE = {
    value: 0,
    products: productList,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action){
    if(action.type === 'ADD_TO_CART') {
        if(state.value === 0) {
            let item = {
                id: action.product.id_product,
                name: action.product.name_product,
                price: action.product.price,
                image: action.product.image,
                quantity: 1
            }
            state.Cart.push(item);
        } else {
            let check = false;
            state.Cart.map((item, key) => {
                if(item.id === action.product.id_product){
                    state.Cart[key].quantity++;
                    check = true;
                }
            });
            if (!check){
                let item = {
                    id: action.product.id_product,
                    name: action.product.name_product,
                    price: action.product.price,
                    image: action.product.image,
                    quantity: 1
                }
                state.Cart.push(item);
            }
        }
        
        
        return {
            ...state,
            value: ( state.value + 1)
        }  
    }
    return state
}
