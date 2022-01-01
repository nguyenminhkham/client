import styled from "styled-components";
import {IoClose} from 'react-icons/io5'

export const CartBackground = styled.aside`
    position: fixed;
    z-index: 50;
    width: 100%;
    min-height: 100vh;
    background: rgba(13, 13, 13, 0.7);
    display: none;
    height: 100%;
    overflow-y: scroll;

    display: ${({ isOpencart }) => (isOpencart ? 'inline-block' : 'none')};
    top: ${({ isOpencart }) => (isOpencart ? 'none' : 'inline-block')};
`

export const CartContainer = styled.div`
    margin-top: 90px;
    z-index: 52;
    width: 608px;
    min-width: 300px;
    background: #f7f7f7;
    height: auto;
    display: block;
    transition: .3s ease-in-out;
    border-radius: 2px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
`

export const Cartcontainerbag = styled.div`
    display: inline-block;
    margin: auto;
    width: 100%;
    /* background: red; */
    height: auto;
`

export const Icon = styled.div`
    /* background: blue; */
    font-size: 24px;
    cursor: pointer;
    outline: none;
    width: auto;
    float: right;
    box-sizing: border-box;
    width: 50%;
    display: inline-block;
`

export const Topsection = styled.div`
    /* background: green; */
    width: auto;
    display: flex;
    margin-top: 10px;
`

export const Yourcart = styled.div`
    /* background: red; */
    float: left;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    margin-left: 32px;
    color: black;
    font-size: 14px;
    line-height: 24px;
`

export const CloseIcon = styled(IoClose)`
    color: #808080;
    float: right;
    margin-right: 10px;
    
`

export const Bodysection = styled.div`
    width: auto;
    height: auto;
    min-height: 250px;
    /* background: green; */
    margin-top: 12px;
    margin-left: 26px;
    margin-right: 26px;
    display: block;
`

export const Item = styled.div`
    width: 128px;
    height: 212px;
    margin-left: 10px;
    display: inline-block;
    position: relative;

    &:hover{
        .deletebtn {
            display: block;
        }
    }

`

export const Image = styled.img`
    width: 128px;
    height: 128px;
`

export const Price = styled.div`
    color: black;
    font-size: 10px;
    text-align: center;
    font-weight: bold;
`

export const CloseIconItem = styled(IoClose)`
    color: black;
    position: absolute;
    right: 0;
    background: #f7f7f7;
    border-radius: 10px;
    display: none;
    `

    export const Botsection = styled.div`
        margin: 26px;
        width: auto;
        height: auto;
        min-height: 200px;
        background: white;
        border-radius: 3px;

        p {
            font-size: 14px;
        }

        .bold {
            font-weight: bold;
        }
    `

    export const CompanyInfo = styled.div`
        margin-top: 10px;
        width: 50%;
        float: left;
        height: 200px;
        /* background: red; */
    `

    export const ClientInfo = styled.div`
        margin-top: 10px;
        width: 50%;
        float: right;
        height: 200px;
        /* background: blue; */
    `



    export const Total = styled.div`
        margin: 20px 26px;
        width: auto;
        height: auto;
        min-height: 100px;
        background: white;
        border-radius: 3px;
        display: flex;
    `

    export const Paymethod = styled.div`
        margin-top: 10px;
        width: 50%;
        float: left;
        height: auto;
        /* background: red; */
    `

    export const Label = styled.div`
        width: 100%
        height: auto;
        margin-top: 10px;
        margin-bottom: 8px;
        /* background: red; */
    `

    export const Input = styled.input`

    `

    export const Span = styled.span`

    `

    export const TotalNumber = styled.div`
        margin-top: 10px;
        width: 50%;
        float: right;
        height: 50px;
        /* background: blue; */

        .left {
            flex: 0.35;
            text-align: left;
            /* background: yellow; */
        }

        .right {
            flex: 0.65;
            text-align: right;
            /* background: green; */
        }

    `

    export const Qty = styled.div`
        width: 100%;
        /* background: red; */
        height: auto;
        display: flex;
    `

    export const Tta = styled.div`
        width: 100%;
        /* background: blue; */
        height: auto;
        display: flex;
    `

    export const Paybtn = styled.div`
        float: right;
        margin-right: 26px;
        width: 240px;
        height: 40px;
        background: #01bf71;
        border-radius: 3px;
        margin-bottom: 20px;
        text-align: center;
        line-height: 40px;
        background-color: none;
        color: white;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            background: #028a52;
    }
    `