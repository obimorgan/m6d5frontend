import { Image, Col } from 'react-bootstrap'
import './SingleProduct.css'

const SingleProduct = ({ image }) => {
    return (
        <>
            <div className="product_container" >
                <Col xs={6} md={3}>
                    <Image className="product_img" src={image} rounded />
                </Col>
            </div>

        </>
    )
}

export default SingleProduct