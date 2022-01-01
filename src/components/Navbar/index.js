import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { Badge } from '@material-ui/core'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLogoimg, 
    Dropdown,
    DropdownContent,
    NavRight,
    NavCart
    } from './NavbarElements';
// import logored from '../../images/logored.png'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import { ShoppingCartOutlined, StarTwoTone } from '@material-ui/icons'


const Navbar = ({ toggle, togglecart }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin

    const dispatch = useDispatch()
    const signoutHandler = () => {
        dispatch(signout())
    }
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} > 
                    <NavLogoimg src='logored.png' alt = "Tmaster"></NavLogoimg>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sản phẩm</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Khám phá</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        to='services'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Dịch vụ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Đăng ký</NavLinks>
                    </NavItem>
                </NavMenu>
                {userInfo ? (
                <NavRight>
                    <NavCart >
                        {cartItems.length > 0 && (
                            <Badge onClick={togglecart} badgeContent={cartItems.length} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        )}

                    </NavCart>
                    <Dropdown>
                        <NavMenu>
                            <NavItem>
                                <NavLinks
                                to='#'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >{userInfo.name} <i className="fa fa-caret-down dropdownarow"></i>
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <DropdownContent className="drc">
                            <NavLinks
                            to='#signout'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            onClick={signoutHandler}
                            >Đăng xuất</NavLinks>
                        </DropdownContent>
                    </Dropdown>
                </NavRight>
                ) : (
                <NavBtn>
                    <NavBtnLink
                    to='/signin'
                    smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Đăng nhập</NavBtnLink>
                </NavBtn>
                )}
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar