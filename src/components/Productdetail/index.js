import React from 'react'
import Navbar from '../Navbar/backgroundNav'
import Footer from '../Footer/index'
import { Announcement } from '@material-ui/icons'
import {
    Container,
    Wrapper,
    ImgContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    AddContainer,
    Button
} from './productdetailElentments'

const Productdetail = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/YZGFSPY/bophanmaydannhan4-1255x1024.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Chuyền dán nhãn tự động</Title>
                    <Desc>
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                        Dây chuyền sản xuất dán nhãn tự động
                    </Desc>
                    <Price>10,000,000 VND</Price>
                    <FilterContainer>
                    </FilterContainer>
                    <AddContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Productdetail
