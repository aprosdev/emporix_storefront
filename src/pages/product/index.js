import React , { useState, createContext, useContext} from "react";
import {useParams} from 'react-router-dom'

import ProductPage from "./ProductPage";
import ProductDetailPage from './ProductDetailPage';
import Layout from "../Layout";
import products from './products'

const ProductList = () => {
    const {category } = useParams()

    return (
        <Layout title={category}>
            <ProductPage />
        </Layout>
    )
}

export const ProductDetails = () => {
    const {product_id} = useParams()

    return(
        <Layout title={""}>
            <ProductDetailPage product={products[product_id-1]}/>
        </Layout>
    )
}

export default ProductList;