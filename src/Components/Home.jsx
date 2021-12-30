import { useState, useEffect } from "react";
import Product from "./Products/Product";
import { Row } from "react-bootstrap";

const Home = () => {
    const [products, setProducts] = useState(null)

    const getProducts = async () => {
        try {
            const response = await fetch("https://hw-m6d5.herokuapp.com/products")
            if (response.ok) {
                const data = await response.json()
                setProducts(data)
            } throw new Error("Failed to get products!")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Row>
            {products?.map((product) =>
                <Product key={product.id} id={product.id} image={product.image_url} name={product.product_name} price={product.price} />)
            }
        </Row>
    )
}
export default Home