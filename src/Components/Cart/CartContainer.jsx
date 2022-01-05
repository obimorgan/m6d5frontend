import "./Cart.css"
import { Container, Table } from "react-bootstrap"
import { useGlobalContext } from "../DataContext";
import CartItem from "./CartItem";

const CartContainer = () => {
    const { cartItems } = useGlobalContext()
    console.log("Hello", cartItems)
    return (
        <Container>
            <h1>Cart</h1>
            <Table>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {
                    cartItems?.map(item => {
                        return <CartItem key={item.productId} {...item} />
                    })
                }
                <footer>
                    <div>
                        Cart Total :
                    </div>
                </footer>
            </Table>
        </Container>
    )
}
export default CartContainer