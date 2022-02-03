import Footer from '../components/Footer'
import BackgroundNav from '../components/Navbar/backgroundNav'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import React,  { Suspense, useEffect, useState } from 'react'
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
    Model,
    ArrowBackb,
    LeftAdd,
    RightAdd,
    AddContainerSub,
    NameItem,
    NameItemby,
    PriceItem,
    NameAuthor,
    Hidden,
    ButtonContainer
} from '../components/Productdetail/productdetailElentments'
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box'
import { OrbitControls } from '@react-three/drei'
import Car from '../components/Car'
import Categories from '../components/Category/CategoriesIndex'
import { addToCart } from '../actions/cartActions'
import Cartpayment from '../components/Cartpayment'
import Sidebar from '../components/Sidebar'
import { addUser } from '../actions/productActions'
import MessengerCustomerChat from 'react-messenger-customer-chat'

const ProductdetailPage = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const [current, setCurrent] = useState(0)

    const userRegister = useSelector((state) => state.userSignin)
    const {userInfo} = userRegister

    const nextSlide = () => {
        try {
            const length = product.img.length
            setCurrent(current === length -1 ? 0 : current + 1)
        } catch (err) {
            
        }
    }

    const prevSlide = () => {
        try {
            const length = product.img.length
            setCurrent(current === 0 ? length - 1 : current - 1)
        } catch (err) {

        }
    }

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
        // props.history.push(`/cart/${productId}`)
        dispatch(addToCart(productId))
    }

    // const history = useHistory()
    const addToDownload = async () => {
        try {
            const userId = userInfo._id
            dispatch(addUser(productId, userId))
        } catch (err) {}
        // history.push('/downloads')
        window.location = '../downloads'
    }

    const [isOpen, setIsOpen] = useState(false)
    const [isOpencart, setIsOpencart] = useState(false)

    const togglecart = () => {
        setIsOpencart(!isOpencart)
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [scrollPosition, setScrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset
        console.log(position)
        setScrollPosition(position)
    }
    
    return (
        <>  
            {loading ? (
                <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
            <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Cartpayment isOpencart={isOpencart} togglecart={togglecart}/>
            <Hidden isOpencart={isOpencart}>
            <BackgroundNav togglecart={togglecart} toggle={toggle} handleScroll={handleScroll}/> 
                    <ArrowBacka >
                        <ArrowBackb to='../category'>
                        <ArrowBack />
                        <p>Quay lại</p>
                        </ArrowBackb>
                    </ArrowBacka>
            <Container>
            <Wrapper>
                <ArrowLeft>
                    <ArrowBackIos fontSize='large' onClick={prevSlide}/>
                </ArrowLeft>
                <ImgContainer>
                    <Image src={product.img[current]} current={current} />
                    <Model current={current} >
                    <Canvas className='canvas'>
                        <OrbitControls enableZoom={true}/>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2, 5, 2]} intensity={1} />
                        <Suspense fallback={null}>
                            <Car />
                        </Suspense>
                    </Canvas>
                    </Model>
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
                </InfoContainer> */}
            </Wrapper>
        </Container>
                    <AddContainer>
                        <AddContainerSub>
                    <LeftAdd>
                        <NameItem>{product.title}</NameItem>
                        <NameItemby>by</NameItemby>
                        <NameAuthor>Kham</NameAuthor>
                    </LeftAdd>
                    <ButtonContainer value={product.price}>

                    <RightAdd className='Free' >
                        <Button onClick={addToDownload}>Tải xuống</Button>
                        <PriceItem className='right'>Free</PriceItem>
                    </RightAdd>

                    <RightAdd className='Notfree' >
                        <Button onClick={addToCartHandler}>Thêm vào Giỏ</Button>
                        <PriceItem className='right'><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' VND'} /></PriceItem>
                    </RightAdd>

                    </ButtonContainer>
                        </AddContainerSub>
                    </AddContainer>
            <Categories />
            <Footer/>
            </Hidden>
            <MessengerCustomerChat
                pageId="101144022461621"
                appId="1534070466979573"
                // htmlRef="<REF_STRING>"
            />
            </>
            )}
        </>
            )
}

export default ProductdetailPage

