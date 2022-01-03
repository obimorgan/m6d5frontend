import "./Cart.css"
import { Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Navbar from "../Navbar/Navbar"

const CartContainer = () => {

    const [cartItems, setCartItems] = useState(null)

    const fetchCartItems = async () => {
        try {
            const response = await fetch("https://hw-m6d5.herokuapp.com/shoppingcart/16abcacb-d1ea-40d5-8a63-941a3a4a9fc4")
            if (response.ok) {
                const data = await response.json()
                setCartItems(data.cartItem)
                console.log(cartItems)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCartItems()
    }, [])

    return (
        <>
            <Navbar />
            <h1>Cart</h1>
            {
                cartItems?.map((item) => {
                    return (
                        <section>
                            <div key={item.productIde} className="product_headers d-flex" >
                                <Col className="flex-colum" md={3}>
                                    <div>Product</div>
                                    <img className="product_img" src={item.product.image_url} />
                                    <div className="card_body flex-column">
                                        <h5>{item.product.product_name}</h5>
                                        <p> {item.product.description}</p>
                                    </div>
                                </Col>
                                <Col className="flex-colum" md={3}>
                                    <div>Price</div>
                                    <div className="card_body flex-column">
                                        <h5>{item.product.price}</h5>
                                    </div>
                                </Col>
                                <Col className="flex-colum" md={3}>
                                    <div>Quantity</div>
                                    <div className="d-flex" >
                                        <button>+</button>
                                        <div>{item.unitQuantity}</div>
                                        <button>-</button>
                                    </div>
                                </Col>
                                <Col className="flex-colum" md={3}>
                                    <div>Total</div>
                                    <div>{item.unitTotalPrice}</div>
                                </Col>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}
export default CartContainer