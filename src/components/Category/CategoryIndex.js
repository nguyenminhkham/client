import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Image, Circle, Icon, Name, GridContainer, Flex} from './CategoryElements'
const Category = ({product}) => {
    return (
        <>
        <GridContainer>
            <Flex>
        <Container>
            {/* <Circle/> */}
            <Image src={product.img}/>
            {/* <Info to={`/product/${product._id}`}>
                <Icon>
                <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                <Link to={`/product/${product._id}`}>
                <SearchOutlined/>
                </Link>
                </Icon>
            </Info> */}
            <Name to={`/product/${product._id}`}>{product.title}</Name><br/>
            <Name to={`/product/${product._id}`}>by Kham</Name>
        </Container>
            </Flex>
        </GridContainer>
            </>
    )
}

export default Category
