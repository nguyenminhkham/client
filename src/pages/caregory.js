import { useState } from 'react'
import { GridContainer, GridFooter,Body } from '../components/CartPage/CartElements'
import Cartpayment from '../components/Cartpayment'
import Categories from '../components/Category/CategoriesIndex'
import Footer from '../components/Footer'
import BackgroundNav from '../components/Navbar/backgroundNav'
import { Hidden } from '../components/Productdetail/productdetailElentments'

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
    </>
    )
}

export default CaregoryPage
