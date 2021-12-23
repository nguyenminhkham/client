import React, { useEffect, useState } from 'react'
import { Container } from './CategoriesElements'
import {popularCategories} from '../../data'
import Category from './CategoryIndex'
import axios from "axios"

const Categories = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("https://banvecokhi.com/api/products")
                console.log(res.data)
                setProducts(res.data)
            } catch(err){}
        }
        getProducts()
    },[])
    return (
        <Container>
            {products.map((item)=>(
                <Category item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
