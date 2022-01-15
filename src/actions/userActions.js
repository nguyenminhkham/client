import Axios from 'axios'
import {
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT
} from '../constants/userContants'


export const register = (name, email, password, confirmpassword)  => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } })
    try {
        const {data} = await Axios.post('https://banvecokhi.com/api/users/register', {name, email, password, confirmpassword})
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data})
        // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data})
        // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        })
    }
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password}})
    try {
        const {data} = await Axios.post('https://banvecokhi.com/api/users/signin', {email, password})
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const signin_google = (response) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {response}})
    try {
        const {data} = await Axios.post('https://banvecokhi.com/api/users/signin_google', {tokenId: response.tokenId})
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_SIGNOUT})
}
