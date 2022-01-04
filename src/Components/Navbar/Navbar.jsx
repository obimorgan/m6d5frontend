import { Container } from "react-bootstrap";
import "./Navbar.css"
import { BsFillCartFill } from "react-icons/bs"
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataContext"



const NavBar = () => {
    const products = useContext(DataContext)
    // const { value2 } = useContext(DataContext)
    // const [cartItems, setCartItems] = value2

    return (
        < Container >
            <div className="nav d-flex align-content-center" >
                <Link to="/" className="nav-link" href="/home">Home</Link>
                <Link to="/cart/userId" className="nav-link"><BsFillCartFill />
                    {/* <span>{cartItems.length}</span> */}
                    <span>{products.length}</span>
                </Link>
                <div className="search_bar " >
                    <Searchbar />
                </div>
            </div>
        </ Container >
    )
}

export default NavBar