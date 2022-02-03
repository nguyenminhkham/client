import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import DownloadProducts from '.'
import { listuserProduct, deleteUser } from '../../actions/productActions'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'
import { TiDelete } from "react-icons/ti"
import { addToCheck, removeFromChecked } from '../../actions/cartActions'


const Container = styled.div`
    display: block;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background: #f7f7f7;
    margin-top: -26px;
`

const TopSection = styled.div`
    /* background: red; */
    height: 58px;
    width: 980px;
    margin: 26px auto 0 auto;
    display: flex;
`

const Left = styled.div`
    /* background: blue; */
    flex: left;
    width: 70%;
    height: 100%;
    display: flex;

    p {
        line-height: 58px;
    }
`

const Myproducts = styled.a`
    line-height: 58px;
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
`

const Right = styled.div`
    /* background: green; */
    flex: right;
    width: 30%;
    height: 100%;
`

const Input = styled.input`
    float: right;
    margin-top: 18px;
`

const Table = styled.div`
    width: 733px;
    height: auto;
    min-height: 80vh;
    margin: 20px auto 0 auto;
    border: 1px solid #ccc;
    box-sizing: border-box;

    .one {
        position: relative;
        /* display: flex; */
        /* background: green; */
        float: right;
    }

    .three{
        height: 26px;
    }

    .products {
        height: 580px;
        background: white;
    }

    .five {
        height: 50px;
    border: none;
    }
`

const TableSection = styled.div`
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ccc;
    `

const FlexSection = styled.div`
    width: 100%;
    height: 26px;
    display: flex;

    .onex {
        width: 62px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .twox {
        width: 337px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .threex {
        width: 112px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .fourx {
        width: 107px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .fivex {
        width: 122px;
        height: 26px;
        border-bottom: 1px solid #ccc;
    }
`

const Column = styled.div`
    background: #f7f7f7;
    height: 26px;
    width: auto;
`

const Sectionx = styled.div`
    display: block;
    width: 30%;
    height: 100%;
    /* background: green; */
    margin-left: 10px;
`

const RemoveSection = styled.button`
    display: flex;
    /* background: green; */
    height: 47px;
    width: 122px;
    right: 0;
    position: absolute;
    border-radius: 0;
    border: 0;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: ${({ len }) => (len > 0 ? 'white' : '#f7f7f7')};
    cursor: ${({ len }) => (len > 0 ? 'pointer' : '')};
`
const RemoveIcon = styled(TiDelete)`
    /* color: red; */
    width: 24px;
    height: 24px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px;
    color: ${({ len }) => (len > 0 ? 'red' : '#666666')};
`

const RemoveText = styled.text`
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    line-height: 47px;
    color: ${({ len }) => (len > 0 ? 'black' : '#666666')};
    font-weight: ${({ len }) => (len > 0 ? 'bold' : '')};
`

const Checkbox = styled.input`
    margin-left: 5px;
    margin-top: 6px;
`

const Text = styled.text`
    font-size: 14px;
    color: #666666;
    line-height: 26px;
    margin-left: 5px;
`

const Downloads = () => {
    const dispatch = useDispatch()
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin

    const userId = userInfo._id

    const productListUser = useSelector((state) => state.productListUser)
    const { loading, error, products } = productListUser
    const checked = useSelector((state) => state.checked)
    const {checkedItems} = checked
    const [len, setLen] = useState(0)

    useEffect(() => {
        dispatch(listuserProduct(userId))
    }, [dispatch, userId])
    
    const [allchecked, setAllchecked] = useState()
    
    const allcheckedChange = () => {
        if (allchecked) {
            checkedItems.forEach(element => {
                dispatch(removeFromChecked(element.product))
            });
        } else if (allchecked === false) {
            products.forEach(element => {
                dispatch(addToCheck(element._id))
            })
        }
    }

    // let len = Object.keys(checkedItems).length

    useEffect(() => {
        setLen(Object.keys(checkedItems).length)
        console.log(len);
        try {
            if (len === 0) {
                setAllchecked(false)
            } else {
                if (len === Object.keys(products).length) {
                    setAllchecked(true)
                } else if (len < Object.keys(products).length) {
                    setAllchecked(false)
                }
            }
        } catch (err) {}
    })

    // var i = 1;               //  set your counter to 1

    // function myLoop() {         //  create a loop function
    //   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    //     console.log('hello');   //  your code here
    //     i++;                    //  increment the counter
    //     if (i < 10) {           //  if the counter < 10, call the loop function
    //       myLoop();             //  ..  again which will trigger another 
    //     }                       //  ..  setTimeout()
    //     }, 3000)
    // }
    // myLoop()
    
    const deleteusers = () => {
        setLen(Object.keys(checkedItems).length)
        var i = len - 1
        if (len > 0) {
            try {
                // checkedItems.map(x => (
                //     dispatch(deleteUser(x.product, x.userIdx))
                //     ))
                // window.location.reload()
                Loop()
                function Loop() {
                    if (i >= 0) {
                        setTimeout(function() {
                            var userIdx = products[i].users[0]._id
                            dispatch(deleteUser(checkedItems[i].product, userIdx))
                            // console.log(i);
                            // console.log(userIdx);
                            i--
                            if (i >= 0) {
                                Loop()
                            } else {
                                setTimeout(window.location.reload(), 3000)
                            }
                        }, 10)
                    }
                }
            } catch (err) {
            }
        } 
        
    }

    return (
        <>
            <Container>
                <TopSection>
                    <Left>
                        <p>Bản vẽ:</p>
                        <Myproducts href=''>Sản phẩm của tôi</Myproducts>
                        <p>Tải xuống</p>
                    </Left>
                    <Right>
                        <Input type="search"/>
                    </Right>
                </TopSection>
                <Table>
                    <TableSection className='one'>
                    <RemoveSection len={len}>
                        <Sectionx>
                            <RemoveIcon len={len} />
                        </Sectionx>
                        <Sectionx>
                            <RemoveText len={len} onClick={deleteusers} >Xóa</RemoveText>
                        </Sectionx>
                    </RemoveSection>
                    </TableSection>
                    <TableSection className='two'>

                    </TableSection>
                    <TableSection className='three'>
                        <FlexSection>

                        <Column className='onex'>
                            <Checkbox onChange={allcheckedChange} type='checkbox' className='form-check-input' name='allSelect' checked={allchecked}></Checkbox>
                        </Column>
                        <Column className='twox'>
                            <Text>Tên</Text>
                        </Column>
                        <Column className='threex'>
                            <Text>Giá</Text>
                        </Column>
                        <Column className='fourx'>
                            <Text>Ngày mua</Text>
                        </Column>
                        <Column className='fivex'>
                            <Text>Đánh giá</Text>
                        </Column>
                        </FlexSection>
                    </TableSection>
                    <TableSection className='products'>
                    {loading? (
                <LoadingBox></LoadingBox>
                ) : error? (
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                <>  
                    {
                    products.map((product)=>(
                    <DownloadProducts product={product} key={product._id}/>
                    ))}
                </>
            )}
                    </TableSection>
                    <TableSection className='five'>

                    </TableSection>

                </Table>
            </Container>
        </>
    )
}

export default Downloads
