import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Image, Circle, Info, Icon} from './CategoryElements'

const Category = ({product}) => {
    return (
        <Container>
            <Circle/>
            <Image src={product.img}/>
            <Info to={`/product/${product._id}`}>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${product._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Category
