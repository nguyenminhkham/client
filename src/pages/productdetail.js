import Footer from '../components/Footer'
import BackgroundNav from '../components/Navbar/backgroundNav'
import { NavLink, useLocation } from 'react-router-dom'
import React,  { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowForwardIos, ArrowBack } from '@material-ui/icons'
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
    Button,
    ArrowLeft,
    ArrowRight,
    ArrowBacka,
} from '../components/Productdetail/productdetailElentments'
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'


const ProductdetailPage = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const [current, setCurrent] = useState(0)
    
    
    const nextSlide = () => {
        try {
            const length = product.img.length
            setCurrent(current === length - 1 ? 0 : current + 1)
            console.log(length)
        } catch (err) {
            
        }
    }

    const prevSlide = () => {
        try {
            const length = product.img.length
            setCurrent(current === 0 ? length - 1 : current - 1)
            console.log(length)
        } catch (err) {

        }
    }

    console.log(current)

    useEffect(() => {
            dispatch(detailsProduct(productId))
    }, [dispatch, productId])
        
    // const location = useLocation()
    // const id = location.pathname.split("/")[2]
    
    // const [product, setProduct] = useState({})
    
    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const res = await axios.get("http://localhost:8000/api/products/find/"+id)
    //             setProduct(res.data)
    //         }catch{}
    //     }
    //     getProduct()
    // }, [id])
    
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}`)
        }

    return (
        <>  
            {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
            <>
            <BackgroundNav/> 
                    <ArrowBacka to='../category'>
                        <ArrowBack/>
                        <p>Quay lại</p>
                    </ArrowBacka>
            <Container>
            <Wrapper>
                <ArrowLeft>
                    <ArrowBackIos fontSize='large' onClick={prevSlide}/>
                </ArrowLeft>
                <ImgContainer>
                    <Image src={product.img[current]}/>
                </ImgContainer>
                <ArrowRight>
                    <ArrowForwardIos fontSize='large' onClick={nextSlide}/>
                </ArrowRight>
                {/* <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                    {product.desc}
                    </Desc>
                    <Price><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' VND'} /></Price>
                    <FilterContainer>
                    </FilterContainer>
                    <AddContainer>
                    <Button onClick={addToCartHandler}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer> */}
            </Wrapper>
        </Container>
            <Footer/>
            </>
            )}
        </>
            )
}

export default ProductdetailPage

