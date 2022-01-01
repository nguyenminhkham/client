import styled from "styled-components";

export const Rowtop = styled.div`
    margin-top: 80px;
    align-items: flex-start;
`

export const Body = styled.div`
    margin: 0;
    height: calc(100vh - 80px);
    overflow-y: ${({ isOpencart }) => (isOpencart ? 'hidden' : 'none')};
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas: 
    'header'
    'main'
    'footer';
    /* grid-template-columns: 1fr;
    grid-template-rows: 5rem 1fr 5rem; */
    height: 100%;
`

export const GridFooter = styled.div`
    grid-area: footer;
    height: 0;
`

export const Col2 = styled.div`
    flex: 2 1 50rem;
`

export const Cart = styled.h1`
    
`

export const Ul = styled.ul`
    
`

export const Li = styled.li`

`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

export const Small = styled.img`
    max-width: 5rem;
    width: 100%;
`

export const Min30 = styled.div`
    min-width: 30rem;
`

export const Price = styled.div`
    font-size: 2rem;
`

export const Removebtn = styled.button`
    
`

