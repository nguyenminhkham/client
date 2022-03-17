import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ScrollToTop from '../components/ScrollToTop'
import Register from '../components/Register'

const RegisterPage = (props) => {
    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/library'

    const userRegister = useSelector((state) => state.userSignin)
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
