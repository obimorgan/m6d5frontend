import { Image } from 'react-bootstrap'
import './SingleProduct.css'

const SingleProduct = ({ image, price, name }) => {
    return (
        <>
            <div xs={6} md={3} className="product_container" >
                <Image className="product_img" src={image} rounded />
                <h5>{name}</h5>
                <p>Kr- {price}</p>
            </div>

        </>
    )
}

export default SingleProduct