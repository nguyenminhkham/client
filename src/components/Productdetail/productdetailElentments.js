import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const Container = styled.div`

`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    /* margin-top: -120px; */
`

export const ArrowLeft = styled.div`
margin-top: 40vh;

@media screen and (max-width: 768px) {
    margin-top: 18vh;
    }
`

export const ArrowRight = styled.div`
margin-top: 40vh;

@media screen and (max-width: 768px) {
    margin-top: 18vh;
    }
`

export const ArrowBacka = styled(LinkR)`
    display: inline-block;
    text-decoration: none;
    color: black;
    width: auto;
`

export const ArrowBackb = styled(LinkR)`
    display: flex;
    text-decoration: none;
    color: black;
    width: auto;
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
`

export const Image = styled.img`
    display: block;
    width: auto;
    size: cover;
    height: 80vh;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    display: ${props => props.current === 10 ? 'none' : 'block'};

    @media screen and (max-width: 768px) {
        max-height: 40vh;
        max-width: 100%;
        margin-top: 0;
    }
`

export const Model = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    size: cover;
    height: 80vh;
    object-fit: cover;
    display: ${props => props.current === 10 ? 'block' : 'none'};

    @media screen and (max-width: 768px) {
        height: 40vh;
    }
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
export const LeftAdd = styled.div`
    float: left;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    `

export const NameItem = styled.div`
    font-weight: bold;
    color: white;
    width: auto;
    font-size: 20px;
    margin-left: 20px;
    line-height: 50px;

    @media screen and (max-width: 630px) {
        font-size: 14px;
        line-height: 20px;
        margin-top: 11.5px;
    }
`

export const NameAuthor = styled.div`
    color: #CC0000;
    width: auto;
    font-size: 14px;
    margin-left: 5px;
    line-height: 50px;

    @media screen and (max-width: 630px) {
        line-height: 40px;
    }
`

export const RightAdd = styled.div`
    float: right;
    box-sizing: border-box;
    width: 50%;
    display: inline-block;
`

export const AddContainer = styled.div`
    width: auto;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;;
    margin-top: 10px;
    height: 50px;
    box-sizing: border-box;
    justify-content: left;
    align-items: center;

    @media screen and (max-width: 630px) {
        height: 80px;
    }
`

export const AddContainerSub = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    width: 100%;
`

export const NameItemby = styled.div`
    color: white;
    line-height: 50px;
    margin-left: 5px;
    font-size: 14px;

    @media screen and (max-width: 630px) {
        line-height: 40px;
    }
`

export const PriceItem = styled.div`
    color: #01BF71;
    float: right;
    height: 100%;
    line-height: 50px;
    font-size: 20px;
    font-weight: 700;
    margin-right: 10px;

    @media screen and (max-width: 630px) {
        font-size: 16px;
    }
`

export const ButtonContainer = styled.div`
    display: inline-block;
    width: 100%;

    .Free {
        display: ${props => props.value === 0 ? 'inline-block' : 'none'};
    }

    .Notfree {
        display: ${props => props.value === 0 ? 'none' : 'inline-block'};
    }
`

export const Button = styled.button`
    padding: 5px;
    background-color: #01BF71;
    cursor: pointer;
    font-weight: 300;
    color: white;
    border: none;
    border-radius: 2px;
    float: right;
    margin-right: 20px;
    margin-top: 11.5px;
    width: 102px;

    &:hover{
        background-color: #028a52;
    }
`

export const Hidden = styled.div`
    overflow-y: hidden;
    height: ${({ isOpencart }) => (isOpencart ? '100vh' : 'auto')};
`