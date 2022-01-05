import "./Product.css"
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const SingleProduct = ({ id, product_name, price, image_url }) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/${id}`)
    }
    return (
        <div
            onClick={handleNavigate}
            xs={6} md={3} className="product_container" >
            <Image
                className="product_img"
                src={image_url} rounded />
            <div className="product_details" >
                <h5>{product_name}</h5>
                <p>Kr- {price}</p>
            </div>
        </div>
    )
}
export default SingleProduct
