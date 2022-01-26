import {CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CHECKED_ADD_ITEM,
    CHECKED_REMOVE_ITEM,
} from '../constants/cartConstants'

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => 
                    x.product === existItem.product ? item : x
                    )
                }
            } else {
                return { ...state, cartItems: [...state.cartItems, item]}
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload),
            }
            default:
                return state
    }
}

export const checkReducer = (state = {checkedItems: []}, action) => {
    switch (action.type) {
        case CHECKED_ADD_ITEM:
            const item = action.payload
            const existItem = state.checkedItems.find((x) => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    checkedItems: state.checkedItems.map((x) => 
                    x.product === existItem.product ? item : x
                    )
                }
            } else {
                return { ...state, checkedItems: [...state.checkedItems, item]}
            }
        case CHECKED_REMOVE_ITEM:
            return {
                ...state,
                checkedItems: state.checkedItems.filter(x => x.product !== action.payload),
            }
            default:
                return state
    }
}
