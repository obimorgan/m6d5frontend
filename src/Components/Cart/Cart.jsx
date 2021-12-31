import { Container, Image } from "react-bootstrap"
import "./Cart.css"

const Cart = ({ }) => {
    return (
        <Container>
            <div className="card_container d-flex" >
                <Image />
                <div className="column-flex">
                    <h5></h5>
                    <p></p>
                    <p></p>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart