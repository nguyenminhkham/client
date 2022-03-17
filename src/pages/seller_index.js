import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import BackgroundNav from '../components/Navbar/backgroundNav'
import SellerIndex from '../components/seller_indexElement/seller_index'

const Seller_Sign = (props) => {
    return (
        <>
            <BackgroundNav />
            <SellerIndex />
            <Footer />
        </>
    )
}

export default Seller_Sign