import { Image } from 'react-bootstrap'
import './Product.css'
import { useNavigate } from 'react-router'
import { useState } from "react"

const Product = ({ image, price, name, id }) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/product_details/" + id)
    }

    const [selected, setSelected] = useState(null)

    return (
        <>
            <div onClick={handleNavigate}
                xs={6} md={3} className="product_container" >
                <Image
                    selected={selected} changeselected={id => setSelected({
                        selected: id
                    })}
                    className="product_img"
                    src={image} rounded />
                <div className="product_details" >
                    <h5>{name}</h5>
                    <p>Kr- {price}</p>
                </div>
            </div>

        </>
    )
}

export default Product