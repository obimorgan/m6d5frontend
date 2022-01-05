import { Container, Row } from "react-bootstrap"
import './Product.css'
// import { useNavigate } from 'react-router'
import { useGlobalContext } from "../DataContext"
import SingleProduct from "./SingleProduct"

const Product = () => {
    const { products } = useGlobalContext()
    return (
        <Container>
            <Row>
                {
                    products && products.map((product) => {
                        return (
                            <SingleProduct
                                key={product.id}
                                {...product}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Product