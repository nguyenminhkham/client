import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_USER_FAIL,
    PRODUCT_LIST_USER_REQUEST,
    PRODUCT_LIST_USER_SUCCESS,
} from "../constants/productConstants"
import Axios from "axios"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    })
    try {
        const { data } = await Axios.get('/api/products')
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

export const listuserProduct = (userId) => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_USER_REQUEST, payload: userId})
    try {
        const { data } = await Axios.get(`/api/products/user/${userId}`)
        dispatch({ type: PRODUCT_LIST_USER_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const detailsProduct = (productId) => async (dispatch) => {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST, payload: productId})
        try {
            const { data } = await Axios.get(`/api/products/${productId}`)
            dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
        } catch (error) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            })
        }
    }

export const addUser = (productId, userId, accessToken, axiosJWT)  => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: { productId, userId }})
    try {
        const {data} = await axiosJWT.post('/api/products/addusers', {productId, userId}, {headers: {token: `Bearer ${accessToken}`}})
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
        // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data})
        // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

export const deleteUser = (productIdx, userIdx)  => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: { productIdx, userIdx } })
    try {
        const {data} = await Axios.post('/api/products/deleteusers', {productIdx, userIdx})
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}