import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Register from '../components/Register'
import ScrollToTop from '../components/ScrollToTop'

const RegisterPage = (props) => {
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/'

    const userRegister = useSelector((state) => state.userRegister)
    const {userInfo} = userRegister

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])

    return (
        <>
            <ScrollToTop />
            <Register />
        </>
    )
}

export default RegisterPage
