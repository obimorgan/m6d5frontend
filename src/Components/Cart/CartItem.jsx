import "./Cart.css"
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { useGlobalContext } from "../DataContext";


const CartItem = ({ productId, product, unitQuantity, unitTotalPrice }) => {
    const { removeItem, increaseAmount } = useGlobalContext()
    const { description, id, image_url, price, product_name, amount } = product
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
                            onClick={() => removeItem(productId)}
                            className="remove_btn" >Remove</button>
                    </div>
                </td>
                <td className="col-md-2">
                    <h5>{price}</h5>
                </td>
                <td className="col-md-2">
                    <div className="d-flex" >
                        <div className="unit_btn mx-2" type="button"
                            onClick={() => increaseAmount(id)}
                        ><BsPlusCircleFill /></div>
                        <div>{amount}</div>
                        <div className="unit_btn mx-2"
                            type="button"
                        ><BsFillDashCircleFill /></div>
                    </div>
                </td>
                {/* <td className="col-md-2">
                    <div>{unitTotalPrice}</div>
                </td> */}
            </tr>
        </>
    )
}

export default CartItem