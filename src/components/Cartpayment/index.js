import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    CartContainer,
    Icon,
    CloseIcon,
    CartBackground,
    Yourcart,
    Topsection,
    Bodysection,
    Botsection,
    Item,
    Image,
    Price,
    CloseIconItem,
    Total,
    Paybtn,
    Cartcontainerbag,
    
} from './CartpaymentElements'
import NumberFormat from 'react-number-format';
import { removeFromCart } from '../../actions/cartActions';


const Cartpayment = ({isOpencart, togglecart}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id))
    }

    return (
    <>
        <CartBackground isOpencart={isOpencart}>
            <CartContainer >
                <Cartcontainerbag>
                <Topsection>
            <Yourcart>
                <p>YOUR CART</p>
            </Yourcart>
            <Icon >
            <CloseIcon onClick={togglecart}/>
            </Icon>
                </Topsection>

                <Bodysection>
                    {cartItems.map((item) => (
                        <Item>
                            <CloseIconItem className='deletebtn' onClick={() => removeFromCartHandler(item.product)}/>
                            <Image src={item.image}/>
                            <Price><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} suffix={' VND'} /></Price>
                        </Item>
                    ))}
                </Bodysection>
                <Botsection>
                    
                </Botsection>
                <Total>

                </Total>
                <Paybtn>
                    
                </Paybtn>
                </Cartcontainerbag>
            </CartContainer>
        </CartBackground>
    </>
    )
}

export default Cartpayment
