import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'


export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    width: 100%;
    margin-top: -120px;
`

export const ArrowLeft = styled.div`
margin-top: 40vh;
`

export const ArrowRight = styled.div`
margin-top: 40vh;
`

export const ArrowBacka = styled(LinkR)`
    margin-top: 100px;
    display: flex;
    text-decoration: none;
    color: black;
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    margin-top: 50px;
`

export const Image = styled.img`
    width: auto;
    size: cover;
    height: 80vh;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
export const Title = styled.h1`
    font-weight: 200;
`
export const Desc = styled.p`
    margin: 20px 0px;
`

export const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

export const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
`

export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
`

export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

export const Button = styled.button`
    padding: 15px;
    border: 2px solid #2FC712;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #96E287;
    }
`


