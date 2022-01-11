import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

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
                    const res = await axios.post('https:banvecokhi.com/api/users/activation', {activation_token})
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
        <div>
                <h1>{success}</h1>
                <h1>{err}</h1>
        </div>
    )
}

export default ActivationEmail
