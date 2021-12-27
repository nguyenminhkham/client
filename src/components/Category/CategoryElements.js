import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

// export const Info = styled(LinkR)`
//     opacity: 0;
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, .2);
//     z-index: 3;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: all .5s ease;
//     cursor: pointer;
// `

export const GridContainer = styled.div`
    display: flex;
    margin-left: 10px;
`

export const Flex = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Container = styled.div`
    background-color: #E1F4EC;
    width: 290px;
    display: inline-block;
    border: solid 2px #DCF5D7;
    padding: 5px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    border-radius: 5px;
    margin: 0 1.5rem 1.5rem 0;
`
export const Image = styled.img`
    margin: auto;
    margin-top: 2px;
    height: auto;
    z-index: 2;
    width: 100%;
    object-fit: cover;
`

export const Name = styled(LinkR)`
    margin-top: 5px;
    margin-left: 5px;
    text-decoration: none;
    color: black;
`

export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
