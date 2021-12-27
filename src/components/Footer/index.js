import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink,
    SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Về chúng tôi</FooterLinkTitle>
                            <FooterLink to='/'>Hoạt động</FooterLink>
                            <FooterLink to='/'>Ngành nghề</FooterLink>
                            <FooterLink to='/'>Nhà đầu tư</FooterLink>
                            <FooterLink to='/'>Dịch vụ</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Liên hệ chúng tôi</FooterLinkTitle>
                            <FooterLink to='/'>Liên hệ mua hàng</FooterLink>
                            <FooterLink to='/'>Hỗ trợ kỹ thuật</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Mạng xã hội</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Youtube</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Tmaster</SocialLogo>
                        <WebsiteRights>Tmaster © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer
