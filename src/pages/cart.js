import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox'
import {
    Rowtop,
    Col2,
    Cart,
    Ul,
    Li,
    Row,
    Small,
    Min30,
    Price,
    Removebtn,
    GridContainer,
    GridFooter,
    Body
} from '../components/CartPage/CartElements'
import BackgroundNav from '../components/Navbar/backgroundNav';
import Footer from '../components/Footer';

const CartPage = (props) => {
    const productId = props.match.params.id
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId))
        }
    }, [dispatch, productId])

    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id))
    }
    return (
        <>
        <Body>
        <GridContainer>  
        <BackgroundNav />
        <Rowtop >
            <Col2>
                <Cart>Giỏ hàng</Cart>
                {cartItems.length === 0 ? (<MessageBox>
                    Giỏ hàng trống. <Link to ="/category">Đến trang sản phẩm</Link>
                </MessageBox>
            ) : (
                <Ul>
                    {cartItems.map((item) => (
                        <Li key={item.product}>
                                <Row>
                                    <>
                                    <Small
                                    src={item.image}
                                    alt={item.name}
                                    ></Small>
                                    </>
                                <Min30>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Min30>
                                <Price>{item.price} VND</Price>
                                <>
                                    <Removebtn type="button" onClick={() => removeFromCartHandler(item.product)}>Xóa</Removebtn>
                                </>
                                </Row>
                            </Li>
                        ))
                    }
                </Ul>
            )
        } 
            </Col2>
            </Rowtop>
            <GridFooter>
                <Footer />
            </GridFooter>
        </GridContainer>
        </Body>
        </>
    )
}

export default CartPage