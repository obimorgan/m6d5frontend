// import { useState, useEffect } from "react";
import Product from "./Products/Product";
import Navbar from "./Navbar/Navbar"
import { Row } from "react-bootstrap";
import { useContext } from 'react'
import { DataContext } from "./DataContext";

const Home = () => {
    const [products, setProducts] = useContext(DataContext)
    return (
        <>
            <Row>
                {products?.map((product) =>
                    <Product key={product.id} productId={product.id} image={product.image_url} name={product.product_name} price={product.price} />)
                }
            </Row>
        </>
    )
}
export default Home