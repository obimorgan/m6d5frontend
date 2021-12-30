import { Container } from "react-bootstrap";
import "./Navbar.css"
import { BsFillCartFill } from "react-icons/bs"
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <Container>
            <div className="nav d-flex align-content-center" >
                <Link to="/" className="nav-link" href="/home">Home</Link>
                <Link to="/cart" className="nav-link"><BsFillCartFill /></Link>
                <div className="search_bar " >
                    <Searchbar />
                </div>
            </div>

        </ Container>
    )
}

export default NavBar