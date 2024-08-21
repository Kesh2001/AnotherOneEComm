'use client';

import { useContext, useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { ProductsContext } from "../../components/ProductsContext"


export default function CheckoutPage(){

    const {selectedProducts} = useContext(ProductsContext)
    const [ProductsInfo, setProductsInfo]=useState([])
    
    useEffect(()=>{
        const uniqIds = [...new Set(selectedProducts)]

        fetch('/api/products?ids='+uniqIds.join(','))
        .then(response=>response.json()).then(json=>setProductsInfo(json))
    },[selectedProducts])

    return(
        <Layout>
            {selectedProducts.join(',')}
        </Layout>
    )
}