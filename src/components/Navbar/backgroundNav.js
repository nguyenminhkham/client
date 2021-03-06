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
    DropLinks,
    NavCart} from './backgroundNavElements';
// import logored from '../../images/logored.png'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';
import { LocalDiningRounded, ShoppingCartOutlined } from '@material-ui/icons'
import logored from '../../images/logoufocad.png'


const BackgroundNav = ({ toggle, togglecart}) => {

    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin

    const dispatch = useDispatch()
    const signoutHandler = () => {
        dispatch(signout())
    }

    const sellerHandler = () => {
        if (userInfo.isAuth) {
            window.location.href = 'http://localhost:3001'
        } else {
            window.location = '/Seller/Index'
        }
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav >
            <NavbarContainer>
                <NavLogo to='/'> 
                    <NavLogoimg src={logored} alt = "Tmaster"></NavLogoimg>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {/* <NavItem>
                        <NavLinks
                        to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Về chúng tôi</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks
                        to='discover'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sản phẩm</NavLinks>
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
                    </NavItem> */}
                </NavMenu>
                {/* <NavRight> */}
                {userInfo ? (
                        <NavCart >
                        {cartItems.length > 0 && (
                            <Badge onClick={togglecart} badgeContent={cartItems.length} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        )}
                        </NavCart>
                        ) : (
                        <NavCart to='/signin'>
                        {cartItems.length > 0 && (
                            <Badge badgeContent={cartItems.length} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        )}
                        </NavCart>
                        )}
                        {/* </NavRight> */}
                            {userInfo ? (
                // <NavRight>
                    <Dropdown>
                        <NavLinks
                        to='#'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >{userInfo.name} <i className="fa fa-caret-down dropdownarow"></i>
                        </NavLinks>
                        <DropdownContent className="drc">
                            
                        <DropLinks
                                to='/myaccount'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Tài khoản</DropLinks>
                                <DropLinks
                                to='/downloads'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Tải xuống</DropLinks>
                                <DropLinks
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                onClick={signoutHandler}
                                >Đăng xuất</DropLinks>
                                <hr />
                                <DropLinks
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                onClick={sellerHandler}
                                >Seller</DropLinks>

                        </DropdownContent>
                    </Dropdown>
                // </NavRight>
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

export default BackgroundNav