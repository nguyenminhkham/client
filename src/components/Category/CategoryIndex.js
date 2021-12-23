import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import {Container, Image, Circle, Info, Icon} from './CategoryElements'

const Category = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info to='/productdetail'>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Category
