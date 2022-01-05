import "./Cart.css"
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../DataContext";


const CartItem = ({ productId, product, unitQuantity, unitTotalPrice }) => {
    const { removeItem } = useGlobalContext()
    const { amount, description, id, image_url, price, product_name } = product
    return (
        <>
            <tr>
                <td className="col-md-6">
                    <div className="column-flex"  >
                        <img className="cart_img"
                            src={image_url} alt={product_name} />
                        <div>{product_name}</div>
                        <div>{description}</div>
                        <button
                            onClick={() => removeItem(id)}
                            className="remove_btn" >Remove</button>
                    </div>
                </td>
                <td className="col-md-2">
                    <h5>{price}</h5>
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