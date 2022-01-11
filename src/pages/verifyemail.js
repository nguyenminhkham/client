import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import email_logo from '../images/email_logo.png'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: #1C9DF5;
`

const Background = styled.div`
    background: #01bf71;
    width: 50%;
    height: 600px;
    margin: 20vh auto;
    display: flex;
`

const Image = styled.img`
    white: 100px;
    height: 100px;
    margin: 0 auto;
`

const White = styled.div`
    background: white;
    width: 50%;
    height: 500px;
    margin: 20vh auto;
    border-radius: 8px;
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .green {
        margin-top: 50px;
    }
`

const Section = styled.div`
    display: flex;
    margin-top: 20px;

    .verify {
        margin-left: auto;
        margin-right: auto;
        font-size: 26px;
        font-weight: bold;
    }

    .desc {
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
    }

    .small {
        font-size: 16px;
    }

    .top {
        margin-top: 40px;
    }
`

const Emailsent = styled.div`
    width: 90%;
    height: 60px;
    font-size: 20px;
    background: #01bf71;
    border-radius: 5px;
    color: white;
    line-height: 60px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Button = styled(LinkR)`
    background: #5B8DEA;
    color: white;
    border-radius: 3px;
    width: 50%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 60px auto 0 auto;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .2s ease-in-out;
        background: #3C5E9C;
    }
`

const Verifyemail = () => {
    return (
        <>
        <Container>
                <White>
                    <Section className='green'>
                        <Emailsent>Một email xác nhận đã gởi đến email của bạn!</Emailsent>
                    </Section>
                    <Section>
                        <p className='verify'>Xác minh Email của bạn</p>
                    </Section>
                    <Section>
                        <Image src={email_logo}/>
                    </Section>
                    <Section>
                        <p className='desc'>Bạn phải xác nhận địa chỉ email để truy cập trang này</p>
                    </Section>
                    <Section>
                        <Button>Gửi lại email xác nhận</Button>
                    </Section>
                    <Section>
                        <p className='desc small top'>Gặp vấn đề trong xác nhận email hoặc nhập sai địa chỉ email?</p>
                    </Section>
                    <Section>
                        <p className='desc small'>Vui lòng đăng ký một địa chỉ <a target="_blank" href="/register">Email</a> khác</p>
                    </Section>
                </White>
        </Container>
        </>
    )
}

export default Verifyemail
