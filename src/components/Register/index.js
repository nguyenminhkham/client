import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormLabel, Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton } from '../Signin/SigninElements'
import { register } from '../../actions/userActions'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState('')

    const userRegister = useSelector((state) => state.userRegister)
    const {loading, error} = userRegister

    const dispatch = useDispatch()
    const submitHandler = async (e) => {
        e.preventDefault()
        if(password !== confirmpassword) {
            alert('Mật khẩu nhập lại phải giống với mật khẩu')
        } else {
            dispatch(register(name, email, password))
        }
    }

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
                            <FormInput type='text' required placeholder="Nhập tên đăng nhập..." onChange={e=>setName(e.target.value)}/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required placeholder="Nhập email..." onChange={e=>setEmail(e.target.value)}/>
                            <FormLabel rmLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput type='password' required placeholder="Nhập mật khẩu..." onChange={e=>setPassword(e.target.value)}/>
                            <FormLabel rmLabel htmlFor='for'>Xác nhận mật khẩu</FormLabel>
                            <FormInput type='password' required placeholder="Nhập lại mật khẩu..." onChange={e=>setConfirmPassword(e.target.value)}/>
                            <FormButton type='submit'>Đăng ký</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Register
