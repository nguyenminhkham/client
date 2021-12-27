import React, { useEffect, useState } from 'react'
import { Container } from './CategoriesElements'
import Category from './CategoryIndex'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'
import { listProducts } from '../../actions/productActions'
import { useDispatch, useSelector} from 'react-redux'

const Categories = () => {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

            
    return (
        <Container>
            {loading? (
                <LoadingBox></LoadingBox>
                ) : error? (
                    <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                {products.map((product)=>(
                    <Category product={product} key={product._id}/>
                    ))}
                </>
            )}
        </Container>
    )
}

export default Categories
