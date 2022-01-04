import "./Cart.css"
import { Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

const CartContainer = () => {

    const [cartItems, setCartItems] = useState(null)

    const fetchCartItems2 = async () => {
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
        fetchCartItems2()
    }, [])

    return (
        <>
            <h1>Cart</h1>

            <Table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {
                    cartItems?.map((item) => {
                        return (
                            <tr key={item.productid}>
                                <td className="col-md-6">
                                    <div className="column-flex"  >
                                        <img className="cart_img"
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
                                        <div className="unit_btn mx-2" ><BsPlusCircleFill /></div>
                                        <div
                                        >{item.unitQuantity}</div>
                                        <div className="unit_btn mx-2"

                                        ><BsFillDashCircleFill /></div>
                                    </div>
                                </td>
                                <td className="col-md-2">
                                    <div>{item.unitTotalPrice}</div>
                                </td>

                            </tr>

                        )
                    })
                }
                <footer>
                    <div>
                        Cart Total :
                    </div>
                </footer>

            </Table>

        </>
    )
}
export default CartContainer