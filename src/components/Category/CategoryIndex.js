import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Image, Circle, Info, Icon} from './CategoryElements'

const Category = ({item}) => {

    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info to={`/product/${item._id}`}>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
            </Info>
        </Container>
    )
}

export default Category
