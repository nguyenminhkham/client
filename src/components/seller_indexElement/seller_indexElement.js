import styled from 'styled-components'
import bgurl from '../../images/btnAddToCartLong.png'

export const Background = styled.div`
    width: 100%;
    height: auto;
    min-width: 1000px;
    min-height: 100vh;
    background: #F7F7F7;
    margin-top: -20px;
    /* padding-bottom: 24px; */
    position: fixed;
    z-index: -10;
`
export const Welcome = styled.div`
    width: 980px;
    height: 91px;
    margin: 20px auto 0 auto;
    border-bottom: 1px solid #ccc;
    display: flex;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 26px;
`

export const WelcomeText = styled.text`
    color: #454545;
    margin-top: 40px;
    margin-left: 12px;
    font-weight: 500;
    font-size: 20px;
`

export const BodySection = styled.div`
    width: 936px;
    height: auto;
    margin: 20px auto 0 auto;
    display: block;

    .greenbk {
        background: #e8f2d6;
        border-radius: 3px;
        padding: 10px;
    }

    .flex {
        display: flex;
    }

    .mrbtn {
        margin-bottom: 24px;
    }
`

export const SettingText = styled.text`
    color: #454545;
    margin-top: 40px;
    font-weight: 600;
    font-size: 24px;
`

export const SectionIn = styled.div`
    margin-top: 12px;
    margin-left: 12px;

    .bold {
        font-weight: bold;
    }

    .margin-top {
        margin-top: 16px !important;
    }
`

export const Text = styled.text`
    font-size: 14px;
    margin: 5px auto 20px 0;
    background: none;
    color: #454545;
`

export const Left = styled.div`
    float: left;
    width: 50%;
    height: auto;
    background: none;
`

export const Right = styled.div`
    float: right;
    width: 50%;
    height: auto;
    background: none;

    .right {
        float: right;
    }
`

export const Table = styled.div`
    width: 456px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 10px;

    .headtext {
        font-size: 20px;
        font-weight: normal;
        margin-left: 12px;
        line-height: 41px;
    }
`

export const TableHead = styled.div`
    width: 100%;
    height: 41px;
    background: #f0f0f1;
    border-radius: 10px 10px 0 0;
`

export const TableBody = styled.div`
    border-radius: 0 0 10px 10px;
    display: block;
    height: auto;
    margin-right: 5px;

    .payment-option {
        font-size: 14px;
    }

    .email-check {
        margin-left: 12px;
        font-size: 12px;
    }

    .paymentsection {
        width: 55%;
    }

    .smallts {
        margin-top: -10px;
    }

    .mrbottom {
        margin-bottom: 16px;
    }

    .mrt {
        margin-top: 4px;
    }
`

export const RelativeSection = styled.div`
    position: relative;
    width: 422px;
    height: 36px;
    /* background: red; */
    margin: 16px 0 16px 12px;
    display: block;

    .selectpayment {
        width: 86%;
    }

    .starpayment {
        margin-top: -4px;
    }

`

export const InputText = styled.input`
    width: 419px;
    /* margin: 12px 0 12px 12px; */
    display: inline-block;
    border: 1px solid #484848;
    border-radius: 2px;
    box-sizing: border-box;
    color: #868686;
    font-size: 14px;
    height: 34px;
    padding-right: 25px;
    text-indent: 8px;
    background: white;
`

export const StarImage = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;
`

export const InputRadio = styled.input`

`

export const SectionRight = styled.div`
    margin-top: 12px;
    margin-left: 12px;

    .marginleft {
        margin-left: 12px;
    }

    .small {
        font-size: 12px;
    }
`

export const A = styled.a`
    color: #6EC6EC;
    font-size: 12px;
    text-decoration: none;
`

export const InputCheck = styled.input`

`

export const SaveBtn = styled.button`
    margin-left: auto;
    margin-right: auto;
    height: 32px;
    width: 186px;
    background: url(${bgurl}) no-repeat scroll right center transparent;
    border: none;
    cursor: pointer;
`

