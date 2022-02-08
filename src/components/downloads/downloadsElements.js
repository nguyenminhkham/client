import styled from "styled-components"
import { TiDelete } from "react-icons/ti"

export const Container = styled.div`
    display: block;
    width: 100%;
    min-height: 100vh;
    height: auto;
    background: #f7f7f7;
    margin-top: -26px;
`

export const TopSection = styled.div`
    /* background: red; */
    height: 58px;
    width: 980px;
    margin: 26px auto 0 auto;
    display: flex;
`

export const Left = styled.div`
    /* background: blue; */
    flex: left;
    width: 70%;
    height: 100%;
    display: flex;

    p {
        line-height: 58px;
    }
`

export const Myproducts = styled.a`
    line-height: 58px;
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
`

export const Right = styled.div`
    /* background: green; */
    flex: right;
    width: 30%;
    height: 100%;
`

export const Input = styled.input`
    float: right;
    margin-top: 18px;
`

export const Table = styled.div`
    width: 733px;
    height: auto;
    margin: 20px auto 0 auto;
    border: 1px solid #ccc;
    box-sizing: border-box;

    .one {
        position: relative;
        /* display: flex; */
        /* background: green; */
        float: right;
    }

    .three{
        height: 26px;
    }

    .products {
        height: 600px;
        background: white;
    }

    .five {
        height: 42px;
        border: none;
        display: flex;
    }

    .lastpage {
        font-size: 16px;
        line-height: 42px;
        margin-right: 5px;
    }
`

export const TableSection = styled.div`
    width: 100%;
    height: 47px;
    border-bottom: 1px solid #ccc;
    /* background: green; */
    `

export const FlexSection = styled.div`
    width: 100%;
    height: 26px;
    display: flex;

    .onex {
        width: 62px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .twox {
        width: 337px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .threex {
        width: 112px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .fourx {
        width: 107px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .fivex {
        width: 122px;
        height: 26px;
        border-bottom: 1px solid #ccc;
    }
`

export const Column = styled.div`
    background: #f7f7f7;
    height: 26px;
    width: auto;
`

export const Sectionx = styled.div`
    display: block;
    width: 30%;
    height: 100%;
    /* background: green; */
    margin-left: 10px;
`

export const RemoveSection = styled.button`
    display: flex;
    /* background: green; */
    height: 47px;
    width: 122px;
    right: 0;
    position: absolute;
    border-radius: 0;
    border: 0;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    background: ${({ len }) => (len > 0 ? 'white' : '#f7f7f7')};
    cursor: ${({ len }) => (len > 0 ? 'pointer' : '')};
`
export const RemoveIcon = styled(TiDelete)`
    /* color: red; */
    width: 24px;
    height: 24px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 11px;
    color: ${({ len }) => (len > 0 ? 'red' : '#666666')};
`

export const RemoveText = styled.text`
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    line-height: 47px;
    color: ${({ len }) => (len > 0 ? 'black' : '#666666')};
    font-weight: ${({ len }) => (len > 0 ? 'bold' : '')};
`

export const Checkbox = styled.input`
    margin-left: 5px;
    margin-top: 6px;
`

export const Text = styled.text`
    font-size: 14px;
    color: #666666;
    line-height: 26px;
    margin-left: 5px;
`

export const Prevbtn = styled.a`
    text-decoration: none;
    color: ${({ currentPage }) => (currentPage > 1 ? 'black' : '#666666')};
    padding: 10px;
    border: 1px solid ${({ currentPage }) => (currentPage > 1 ? 'black' : '#666666')};
    height: 42px;
    cursor: ${({ currentPage }) => (currentPage > 1 ? 'pointer' : 'context-menu')};

    :active {
        background: ${({ currentPage }) => (currentPage > 1 ? 'black' : '')};
        color: ${({ currentPage }) => (currentPage > 1 ? 'white' : '')};
    }
`

export const Nextbtn = styled.a`
    text-decoration: none;
    color: ${({ currentPage, lastpage }) => (currentPage < lastpage ? 'black' : '#666666')};
    padding: 10px;
    border: 1px solid ${({ currentPage, lastpage }) => (currentPage < lastpage ? 'black' : '#666666')};
    height: 42px;
    cursor: ${({ currentPage, lastpage }) => (currentPage < lastpage ? 'pointer' : 'context-menu')};

    :active {
        background: ${({ currentPage, lastpage }) => (currentPage < lastpage ? 'black' : '')};
        color: ${({ currentPage, lastpage }) => (currentPage < lastpage ? 'white' : '')};
    }
`