import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import FileDownload from 'js-file-download'
import { addToCheck, removeFromChecked } from '../../actions/cartActions'


const Section = styled.div`
    height: 100px;
    width: 100%;
    /* background: red; */
    display: flex;
    border-bottom: 1px solid #ccc;
    /* background: #f7f7f7; */
    background: ${({ checkedx }) => (checkedx ? 'white' : '#f0f0f1')};

    .onexx {
        width: 62px;
    }

    .twoxx {
        width: 337px;
    }

    .threexx {
        width: 112px;
        height: 100px;
    }

    .fourxx {
        width: 107px;
    }

    .fivexx {
        width: 122px;
        height: 100px;
        display: flex;
    }
`

const Image = styled.img`
    margin-top: 10px;
    height: 70px;
    z-index: 2;
    width: 70px;
    object-fit: cover;
`

const Download = styled.a`
    text-decoration: none;
    font-size: 14px;
    height: 18px;
    margin-top: 10px;
    margin-left: 10px;
`

const Column = styled.div`
    height: 100px;
    display: flex;
`

const Checkbox = styled.input`
    margin-left: 5px;
    margin-top: 10px;
`

const Text = styled.text`
    font-size: 14px;
    color: #666666;
    line-height: 26px;
    margin-left: 5px;
`

const DownloadProducts = ({product}) => {
    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userSignin)
    const {userInfo} = userRegister

    const download = () => {
        try {
            const userId = userInfo._id
            const productId = product._id
            axios.post('/api/products/downloads', {productId, userId}, {responseType: "blob"})
            .then((res) => {
                // console.log(res);
                FileDownload(res.data, `${product.title}.zip`)
            })
            
        } catch (err) {}
    }   

    const price = product.price

    const dateiso = new Date(product.users[0].date)

    let year = dateiso.getFullYear();
    let month = dateiso.getMonth()+1;
    let dt = dateiso.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    const date = `${dt}/${month}/${year}`

    const [checkedx, setCheckx] = useState({})

    const checked = useSelector((state) => state.checked)
    const {checkedItems} = checked

    const productId = product._id

    const addToCheckedHandler = () => {
        if (checkedx === true) 
        {
            dispatch(removeFromChecked(product._id))
            setCheckx(false)
        } else {

            dispatch(addToCheck(productId))
        }
    }

    useEffect (() => {
        if (Object.keys(checkedItems).length > 0) {
            checkedItems.forEach(element => {
                if (element.product === product._id) {
                    setCheckx(true)
                }
            });
        } else {
            setCheckx(false)
        }
    })

    return (
    <>
        <Section checkedx={checkedx}>
            <Column className='onexx'>
                <Checkbox checked={checkedx} onChange={addToCheckedHandler} type='checkbox' className='form-check-input' name='prox' value={product._id}></Checkbox>
            </Column>
            {/* <Button onClick={download}></Button> */}
            <Column className='twoxx'>
                <Image src={product.img} />
                <Download href="#" onClick={download}>{product.title}.zip</Download>
            </Column>
            <Column className='threexx'>
                {price === 0 ? (
                    <Text>Free</Text>
                    ) : (
                    <Text>{product.price}</Text>
                )}
            </Column>
            <Column className='fourxx'>
                <Text>{date}</Text>
            </Column>
            <Column className='fivexx'>

            </Column>
        </Section>
    </>
    )
}

export default DownloadProducts;