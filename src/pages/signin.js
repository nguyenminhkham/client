import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ScrollToTop from '../components/ScrollToTop'
import SignIn from '../components/Signin'

const SigninPage = (props) => {
    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/category';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin
    
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        }, [props.history, redirect, userInfo]);
    return (
        <>
            <ScrollToTop />
            <SignIn />
        </>
    )
}

export default SigninPage
