import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from './SigninElements'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../actions/userActions'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignin = useSelector((state) => state.userSignin);
    const { loading, error } = userSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signin(email, password))
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Tmaster</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={submitHandler}>
                            <FormH1>Đăng nhập</FormH1>
                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox variant="danger">{error}</MessageBox>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required onChange={ (e) => setEmail(e.target.value)}/>
                            <FormLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput type='password' required onChange={ (e) => setPassword(e.target.value)}/>
                            <FormButton type='submit'>Tiếp theo</FormButton>
                            <Text>Quên mật khẩu</Text>
                            <Text>Đăng ký</Text>
                        </Form>
                    </FormContent>
                </FormWrap>    
            </Container>    
        </>
    )
}

export default SignIn
