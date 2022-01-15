import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from './SigninElements'
import { useDispatch, useSelector } from 'react-redux'
import { signin, signin_google } from '../../actions/userActions'
import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'

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

    const responseGoogle = (response) => {
        console.log(response)
        dispatch(signin_google(response))
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
                            <FormInput type='email' required onChange={ (e) => setEmail((e.target.value).toLowerCase())}/>
                            <FormLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput type='password' required onChange={ (e) => setPassword(e.target.value)}/>
                            <FormButton type='submit'>Tiếp theo</FormButton>
                            <Text>Quên mật khẩu</Text>
                            <Text>Đăng ký</Text>

                            <GoogleLogin className='google_login'
                            clientId="752561399398-fj38fevcis6prcnh29qqj3aa2b0a2o6i.apps.googleusercontent.com"
                            buttonText="Login with google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                        </Form>
                    </FormContent>
                </FormWrap>    
            </Container>    
        </>
    )
}

export default SignIn
