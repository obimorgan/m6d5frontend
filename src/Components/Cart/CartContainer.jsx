import "./Cart.css"
import { Container, Table } from "react-bootstrap"
import { useGlobalContext } from "../DataContext";
import CartItem from "./CartItem";

const CartContainer = () => {
    const { cartItems, clearCart, total } = useGlobalContext()
    return (
        <Container>
            <h1>Cart</h1>
            <footer>
                <button
                    className="my-3"
                    onClick={clearCart}
                    type="button">Clear cart</button>
                <div className="d-flex justify-content-between my-4 border-bottom">
                    <div>Total</div>
                    <div>{total}</div>
                </div>
            </footer>
            <Table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>

                </tr>

                {
                    cartItems?.map(item => {
                        return <CartItem key={item.productId} {...item} />
                    })
                }


            </Table>
        </Container>
    )
}
export default CartContainer