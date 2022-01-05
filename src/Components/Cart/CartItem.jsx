import "./Cart.css"
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";



const CartItem = ({ product, unitQuantity, unitTotalPrice }) => {
    return (
        <>
            <tr>
                <td className="col-md-6">
                    <div className="column-flex"  >
                        <img className="cart_img"
                            src={product.image_url} alt={product.product_name} />
                        <div>{product.product_name}</div>
                        <div>{product.description}</div>
                    </div>
                </td>
                <td className="col-md-2">
                    <h5>{product.price}</h5>
                </td>
                <td className="col-md-2">
                    <div className="d-flex" >
                        <div className="unit_btn mx-2" ><BsPlusCircleFill /></div>
                        <div
                        >{unitQuantity}</div>
                        <div className="unit_btn mx-2"

                        ><BsFillDashCircleFill /></div>
                    </div>
                </td>
                <td className="col-md-2">
                    <div>{unitTotalPrice}</div>
                </td>
            </tr>
        </>
    )
}

export default CartItem