import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cartpayment from '../components/Cartpayment';
import Downloads from '../components/downloads/downloads';
import BackgroundNav from '../components/Navbar/backgroundNav';
import { Hidden } from '../components/Productdetail/productdetailElentments';
import Sidebar from '../components/Sidebar';

const DownloadsPage = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpencart, setIsOpencart] = useState(false)

    const togglecart = () => {
        setIsOpencart(!isOpencart)
    }
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/signin'

        const userSignin = useSelector((state) => state.userSignin)
        const { userInfo } = userSignin

        useEffect(() => {
            if(!userInfo) {
                props.history.push(redirect)
            }
        }, [props.history, redirect, userInfo])
return (
    <>
        {userInfo ? (
            <>
            <Cartpayment isOpencart={isOpencart} togglecart={togglecart}/>
            <Hidden isOpencart={isOpencart}>
            <BackgroundNav toggle={toggle} togglecart={togglecart}/>
            <Downloads />
            </Hidden>
            </>
        ) : (
            <></>
        )
        }
    </>
    )
}

export default DownloadsPage
