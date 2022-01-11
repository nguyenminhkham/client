import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormLabel, Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton } from '../Signin/SigninElements'
import { register } from '../../actions/userActions'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState('')

    const userRegister = useSelector((state) => state.userRegister)
    const {loading, error} = userRegister
    const { userInfo } = userRegister
    const dispatch = useDispatch()

    const submitHandler = async (e) => {
        e.preventDefault()
            dispatch(register(name, email, password, confirmpassword))
    }

    try {
        if (userInfo.msg) window.location = ('/verifyemail')
        } catch (err) {}

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Tmaster</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={submitHandler}>
                            <FormH1>Đăng ký</FormH1>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox variant="danger">{error}</MessageBox>}
                            <FormLabel htmlFor='for'>Tên</FormLabel>
                            <FormInput default='' type='text'  placeholder="Nhập tên hiển thị..." onChange={e=>setName(e.target.value)}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput default='' placeholder="Nhập email..." onChange={e=>setEmail((e.target.value).toLowerCase())}/>
                            <FormLabel rmLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput default='' type='password'  placeholder="Nhập mật khẩu..." onChange={e=>setPassword(e.target.value)}/>
                            <FormLabel rmLabel htmlFor='for'>Xác nhận mật khẩu</FormLabel>
                            <FormInput default='' type='password'  placeholder="Nhập lại mật khẩu..." onChange={e=>setConfirmPassword(e.target.value)}/>
                            <FormButton type='submit'>Đăng ký</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Register
