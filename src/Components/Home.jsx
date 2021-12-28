import { useState, useEffect } from "react";
import SingleProduct from "./Products/SingleProduct";
import { Row } from "react-bootstrap";

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

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
    return (
        <Row>
            {products?.map((product) =>
                <SingleProduct key={product.id} image={product.image_url} />)
            }
        </Row>
    )
}
export default Home