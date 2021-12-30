import { Container } from "react-bootstrap";
import "./Navbar.css"
import { BsFillCartFill } from "react-icons/bs"
import Searchbar from "./Searchbar";


const NavBar = () => {
    return (
        <Container fluid>
            <div className="nav d-flex align-items-center justify-content-between" >
                <div to="/" className="nav-link" href="/home">Home</div>
                <div to="/cart" className="nav-link"><BsFillCartFill /></div>
                <div className="search_bar " >
                    <Searchbar />
                </div>
            </div>

        </ Container>
    )
}

export default NavBar