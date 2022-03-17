import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {USER_SIGNIN_SUCCESS} from './constants/userContants'

const refreshToken = async () => {
    try {
        const res = await axios.post('/api/users/refresh_token', {withCredentials: true})
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createAxios = (userInfo, dispatch) => {
    const newInstance = axios.create()
    newInstance.interceptors.request.use(
        async(config) => {
            let date = new Date()
            const decodedToken = jwt_decode(userInfo?.accessToken)
            if(decodedToken.exp < date.getTime()/1000){
                const data = await refreshToken()
                const refreshUser = {
                    ...userInfo,
                    accessToken: data.accessToken,
                }
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: refreshUser})
                localStorage.setItem('userInfo', JSON.stringify(refreshUser))
                config.headers['token'] = 'Bearer ' + data.accessToken
            }
            return config
        },
        (err => {
            return Promise.reject(err)
        })
    )
    return newInstance
}