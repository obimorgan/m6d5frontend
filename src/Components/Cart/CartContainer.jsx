import "./Cart.css"
import { Row, Col, Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Navbar from "../Navbar/Navbar"

const CartContainer = () => {

    const [cartItems, setCartItems] = useState(null)
    const [totalSumPrice, setTotalsumPrice] = useState({})

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
    // const fetchCartUnit = async () => {
    //     try {
    //         const response = await fetch("https://hw-m6d5.herokuapp.com/shoppingcart/16abcacb-d1ea-40d5-8a63-941a3a4a9fc4")
    //         if (response.ok) {
    //             const data = await response.json()
    //             setTotalsumPrice(data)
    //             console.log(data)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        fetchCartItems()
        // fetchCartUnit()
    }, [])

    return (
        <>
            <Navbar />
            <h1>Cart</h1>

            <Table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>quantity</th>
                    <th>Total</th>
                </tr>
                {
                    cartItems?.map((item) => {
                        return (
                            <tr key={item.productid}>
                                <td className="col-md-6">
                                    <div className="column-flex"  >
                                        <img className="product_img"
                                            src={item.product.image_url} alt={item.product_name} />
                                        <div>{item.product.product_name}</div>
                                        <div>{item.product.description}</div>
                                    </div>
                                </td>
                                <td className="col-md-2">
                                    <h5>{item.product.price}</h5>
                                </td>
                                <td className="col-md-2">
                                    <div className="d-flex" >
                                        <button>+</button>
                                        <div>{item.unitQuantity}</div>
                                        <button>-</button>
                                    </div>
                                </td>
                                <td className="col-md-2">
                                    <div>{item.unitTotalPrice}</div>
                                </td>

                            </tr>

                        )
                    })
                }

            </Table>
            {/* {
                cartItems?.map((item) => {
                    return (
                        <section>
                            <div key={item.productId} className="product_headers d-flex" >
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
            } */}
            <footer>
                <Row>
                    <div>
                        Cart Total :
                    </div>
                </Row>
            </footer>
        </>
    )
}
export default CartContainer