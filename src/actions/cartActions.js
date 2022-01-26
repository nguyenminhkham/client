import Axios from 'axios'
import {CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CHECKED_ADD_ITEM,
    CHECKED_REMOVE_ITEM,} from '../constants/cartConstants'

export const addToCart = (productId) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.title,
            image: data.img,
            price: data.price,
            product: data._id,
            desc: data.desc,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const addToCheck = (productId) => async (dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    dispatch({
        type: CHECKED_ADD_ITEM,
        payload: {
            product: data._id,
        }
    })
    localStorage.setItem('checkItems', JSON.stringify(getState().checked.checkItems))
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromChecked = (productId) => (dispatch, getState) => {
    dispatch({type: CHECKED_REMOVE_ITEM, payload: productId})
    localStorage.setItem('checkItems', JSON.stringify(getState().checked.checkItems))
}