import { Container, Row } from "react-bootstrap"
import './Product.css'
// import { useNavigate } from 'react-router'
import { useGlobalContext } from "../DataContext"
import SingleProduct from "./SingleProduct"
import { useState } from "react"

const Product = () => {
    const { products } = useGlobalContext()
    const { search, setSearch } = useState("")
    return (
        <Container>
            <Row>
                <form>
                    <input
                        type="text"
                        value={search.value}
                        onChange={(e) => setSearch(e.target.value)} />
                </form>
            </Row>
            <Row>
                {
                    products && products
                        .map((product) => {
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