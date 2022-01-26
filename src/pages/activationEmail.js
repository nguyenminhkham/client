import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import logo_congra from '../images/congra_logo.svg'
import logo_404 from '../images/page_not_found.svg'
import {Link as LinkR} from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: #1C9DF5;
`
const Whiteboard1 = styled.div`
    width: 70%;
    height: 70%;
    background: #E2E3E7;
    border-radius: 10px;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Whiteboard2 = styled.div`
    width: calc(100% + 20px);
    height: 100%;
    background: #E2E3E7;
    border-radius: 10px;
    margin: 12px -10px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
`

const Whiteboard3 = styled.div`
    width: calc(100% + 40px);
    height: 100%;
    background: white;
    border-radius: 12px;
    margin: 10px -10px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .logo {
        margin-top: 100px;
    }
`

const Section = styled.div`
    width: 100%;
    height: auto;
    display: flex;

    .congra {
        margin: 80px auto 0 auto;
        color: #cb2026;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
    }
`

const Image = styled.img`
    width: 150px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`

const Button = styled(LinkR)`
    background: #01bf71;
    color: white;
    border-radius: 3px;
    width: 30%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 100px auto 0 auto;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out;
        background: #048950;
    }
`

const ActivationEmail = (props) => {
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/category';
    
    const userRegister = useSelector((state) => state.userSignin)
    const {userInfo} = userRegister
    
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        }, [props.history, redirect, userInfo]);
    
    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/api/users/activation', {activation_token})
                    setSuccess(res.data.msg)
                    console.log(res.data.msg)
                } catch (err) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token])
    
    console.log(activation_token)
    return (
        <>
            <Container>
                <Whiteboard1>
                    <Whiteboard2>
                            {success? (
                        <Whiteboard3>
                            <Section className='logo'>
                                <Image src={logo_congra} />
                            </Section>
                            <Section>
                                <p className='congra'>Chúc mừng! bạn đã đăng ký thành công!</p>
                            </Section>
                            <Section>
                                <Button to='../../category'>Tiếp tục mua hàng</Button>
                            </Section>
                        </Whiteboard3>
                            ) : (
                                <Whiteboard3>
                            <Section className='logo'>
                                <Image src={logo_404} />
                            </Section>
                            <Section>
                                <p className='congra'>Liên kết không tồn tại!</p>
                            </Section>
                            <Section>
                                <Button to='../../category'>Tiếp tục mua hàng</Button>
                            </Section>
                        </Whiteboard3>
                            )}
                    </Whiteboard2>
                </Whiteboard1>
            </Container>
        </>
    )
}

export default ActivationEmail
