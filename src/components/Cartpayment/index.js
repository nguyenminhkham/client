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
    CompanyInfo,
    ClientInfo,
    Paymethod,
    TotalNumber,
    Qty,
    Tta,
    Label,
    Input,
    Span,
    SigninContainer,

} from './CartpaymentElements'
import NumberFormat from 'react-number-format';
import { removeFromCart } from '../../actions/cartActions';


const Cartpayment = ({isOpencart, togglecart}) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart

    const user = useSelector((state) => state.userSignin)
    const {userInfo} = user

    const removeFromCartHandler = (id) => {
        //delete action
        dispatch(removeFromCart(id))
    }

    return (
    <>
        <CartBackground isOpencart={isOpencart}>
        {userInfo ? (
            <CartContainer >
            <Cartcontainerbag>
            <Topsection>
        <Yourcart>
            <p>GIỎ HÀNG</p>
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
                <CompanyInfo>
                    <p className='bold'>Thông tin công ty</p>
                    <p>Tên công ty: Technology Master</p>
                    <p>Sđt: 093 4444 236</p>
                    <p>Địa chỉ: Tp. HCM</p>
                </CompanyInfo>
                <ClientInfo>
                    <p className='bold'>Thông tin khách hàng</p>
                    <p>Tên khách hàng: {userInfo.name}</p>
                    <p>Địa chỉ email: {userInfo.email}</p>
                    <p>Sđt: 0909xxxxxx</p>
                    <p>Địa chỉ: Tp. HCM</p>
                </ClientInfo>
            </Botsection>
            <Total>
                <Paymethod>
                    <p><strong>Phương thức thanh toán</strong></p>
                    <Label>
                        <Input type="radio" name="radio"></Input>
                        <Span> Chuyển khoản ngân hàng</Span>
                    </Label>
                    <Label>
                        <Input type="radio" name="radio"></Input>
                        <Span> Paypal</Span>
                    </Label>
                    <Label>
                        <Input type="radio" name="radio"></Input>
                        <Span> Thanh toán thẻ</Span>
                    </Label>
                </Paymethod>
                <TotalNumber>
                    <Qty>
                    <p className='left'> 
                        Số lượng:
                    </p>
                    <p className='right'> 
                        <strong>{cartItems.reduce((a, c) => a + 1, 0 )}</strong>
                    </p>
                    </Qty>
                    <Tta>
                    <p className='left'>
                        Tổng cộng:
                    </p>
                    <p className='right'>
                        <strong><NumberFormat value={cartItems.reduce((a, c) => a + c.price , 0)} displayType={'text'} thousandSeparator={true} suffix={' VND'} /> </strong>
                    </p>
                    </Tta>
                </TotalNumber>
            </Total>
            <Paybtn>
                Thanh toán
            </Paybtn>
            </Cartcontainerbag>
        </CartContainer>
            ) : (
            <></>   
            )}
        </CartBackground>
    </>
    )
}

export default Cartpayment
