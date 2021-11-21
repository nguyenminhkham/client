import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text} from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Tmaster</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Đăng nhập</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Mật khẩu</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Tiếp theo</FormButton>
                            <Text>Quên mật khẩu</Text>
                        </Form>
                    </FormContent>
                </FormWrap>    
            </Container>    
        </>
    )
}

export default SignIn
