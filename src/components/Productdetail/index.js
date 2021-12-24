import React,  { useEffect, useState } from 'react'
import Navbar from '../Navbar/backgroundNav'
import Footer from '../Footer/index'
import { Announcement } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
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
import axios from 'axios'
import NumberFormat from 'react-number-format';

const Productdetail = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("https://banvecokhi.com/api/products/find/"+id)
                setProduct(res.data)
            }catch{}
        }
        getProduct()
    }, [id])

    return (
        <Container>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' VND'} /></Price>
                    <FilterContainer>
                    </FilterContainer>
                    <AddContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Productdetail
