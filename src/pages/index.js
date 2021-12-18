import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import { Container } from '../components/Signin/SigninElements'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <HeroSection />     
            <InfoSection {...homeObjOne}/> 
            <InfoSection {...homeObjTwo}/> 
            <Services />
            <InfoSection {...homeObjThree}/> 
            {/* <InfoSection {...homeObjFour}/> 
            <InfoSection {...homeObjFive}/> 
            <InfoSection {...homeObjSix}/> */}
            <Footer />
        </>
    )
}

export default Home