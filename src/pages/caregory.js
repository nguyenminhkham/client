import { useState } from 'react'
import { GridContainer, GridFooter,Body } from '../components/CartPage/CartElements'
import Cartpayment from '../components/Cartpayment'
import Categories from '../components/Category/CategoriesIndex'
import Footer from '../components/Footer'
import BackgroundNav from '../components/Navbar/backgroundNav'
import { Hidden } from '../components/Productdetail/productdetailElentments'
import MessengerCustomerChat from 'react-messenger-customer-chat'

const CaregoryPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpencart, setIsOpencart] = useState(false)
    const togglecart = () => {
        setIsOpencart(!isOpencart)
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Cartpayment isOpencart={isOpencart} togglecart={togglecart}/>
            <BackgroundNav togglecart={togglecart} toggle={toggle}/>
        <Body isOpencart={isOpencart}>
            <Hidden isOpencart={isOpencart}>
                <GridContainer>
            <Categories />
            <GridFooter>
            <Footer />
            </GridFooter>
                </GridContainer>
        <Footer/>
        </Hidden>
        </Body>
        <MessengerCustomerChat
                pageId="101144022461621"
                appId="1534070466979573"
                // htmlRef="<REF_STRING>"
            />
    </>
    )
}

export default CaregoryPage
