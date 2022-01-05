import { Container } from "react-bootstrap";
import "./Navbar.css"
import { BsFillCartFill } from "react-icons/bs"
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../DataContext";

const NavBar = () => {
    const { amount, cartItems, total } = useGlobalContext()
    console.log("total", total)
    console.log("navbar", cartItems)

    return (
        < Container >
            <div className="nav d-flex align-content-center" >
                <Link to="/" className="nav-link" href="/home">Home</Link>
                <Link to="/cart/userId" className="nav-link"><BsFillCartFill />
                    {/* <span>{amount}</span> */}
                    <span>{amount}</span>
                </Link>
                <div className="search_bar " >
                    <Searchbar />
                </div>
            </div>
        </ Container >
    )
}

export default NavBar