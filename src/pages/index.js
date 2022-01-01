import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cartpayment from '../components/Cartpayment'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from '../components/InfoSection/Data'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Navbar from '../components/Navbar'
import { Hidden } from '../components/Productdetail/productdetailElentments'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import { Container } from '../components/Signin/SigninElements'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpencart, setIsOpencart] = useState(false)

    const togglecart = () => {
        setIsOpencart(!isOpencart)
    }
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position)
        setScrollPosition(position);
    };
    
        return (
            <>
            <Cartpayment isOpencart={isOpencart} togglecart={togglecart}/>
            <Hidden isOpencart={isOpencart}>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} togglecart={togglecart} handleScroll={handleScroll}/> 
            <HeroSection />   
            <InfoSection {...homeObjOne}/> 
            <InfoSection {...homeObjTwo}/> 
            <Services />
            <InfoSection {...homeObjThree}/> 
            {/* <InfoSection {...homeObjFour}/> 
            <InfoSection {...homeObjFive}/> 
            <InfoSection {...homeObjSix}/> */}
            <Footer />
            </Hidden>
        </>
    )
}

export default Home