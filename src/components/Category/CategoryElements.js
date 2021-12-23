import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const Info = styled(LinkR)`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
    cursor: pointer;
`
export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 290px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E1F4EC;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
export const Image = styled.img`
    height: 263px;
    z-index: 2;
    width: 235px;
    object-fit: cover;
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
