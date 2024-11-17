import React from 'react'
import { Helmet } from 'react-helmet'
import LatestProduct from '../../Components/LatestProduct'

export default function Products
    () {
    return (
       <>
       <Helmet>
        <title>Products</title>
       </Helmet>
       <LatestProduct/>
       </>
    )
}
