import { Container, Row, Col, Image } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { BsCartPlusFill } from "react-icons/bs"

const Productdetails = () => {

    const { productId } = useParams()
    const [productDetails, setProductDetails] = useState({})

    const fetchProductDetails = async () => {
        try {
            const response = await fetch(`https://hw-m6d5.herokuapp.com/products/${productId}`)
            if (response.ok) {
                const info = await response.json()
                setProductDetails(info)
            } throw new Error("Failed to get products!")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProductDetails()
    }, [])

    return (
        <Container>
            <Row>
                <Col m={8}>
                    <Image className="single_img" src={productDetails.image_url} />
                </Col>
                <Col m={4}>
                    <div className="product_details_text flex-column" >
                        <h5>{productDetails.product_name}</h5>
                        <p>{productDetails.description}</p>
                        <p>kr. {productDetails.price}</p>
                        <p><BsCartPlusFill /></p>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
export default Productdetails