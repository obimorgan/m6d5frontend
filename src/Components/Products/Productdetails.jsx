import { Container, Col, Image } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BsCartPlusFill } from "react-icons/bs"
import { IconContext } from "react-icons/lib"

const Productdetails = () => {

    let { productId } = useParams()
    console.log("this context:", productId)
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

    const handleAddToCart = async () => {
        try {
            const response = await fetch(`https://hw-m6d5.herokuapp.com/shoppingcart/${productId}/16abcacb-d1ea-40d5-8a63-941a3a4a9fc4`, {
                method: "POST",
                body: JSON.stringify(),
                header: { "Content-type": "application/json" }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                alert("You added this product to cart")
            } else throw new Error("Post failed")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <div className="d-flex">
                <Col m={8}>
                    <Image className="single_img" src={productDetails.image_url} />
                </Col>
                <Col m={4} className="details_container">
                    <div className="product_details_text flex-column justify-content-between" >
                        <h1 >{productDetails.product_name}</h1>
                        <h4>{productDetails.price} Kr</h4>
                        <div>
                            <h5>Description</h5>
                            <p>{productDetails.description}</p>
                        </div>
                        <IconContext.Provider value={{ size: "25px" }}>
                            <button className="add_cart_btn" type="button"
                                onClick={() => handleAddToCart()}
                            ><BsCartPlusFill />
                            </button>
                        </IconContext.Provider>
                    </div>
                </Col>
            </div>
        </Container>
    )
}
export default Productdetails