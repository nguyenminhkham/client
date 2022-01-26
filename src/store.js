import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers'
import { cartReducer, checkReducer } from './reducers/cartReducers'
import { productDetailsReducer, productListReducer, productListUserReducer } from './reducers/productReducers'

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
}

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    productListUser: productListUserReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    checked: checkReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
)

export default store