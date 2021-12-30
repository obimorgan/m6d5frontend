import { Container, Nav } from "react-bootstrap";
import "./Navbar.css"
import { BsFillCartFill } from "react-icons/bs"
import Searchbar from "./Searchbar";


const NavBar = () => {
    return (
        <Container fluid>
            <div className="nav d-flex align-items-center justify-content-between" >
                <Nav
                    activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item  >
                        <div className="" href="/home">Home</div>
                    </Nav.Item>
                    <Nav.Item  >
                        <div className="mx-5" eventKey="link-1"><BsFillCartFill /></div>
                    </Nav.Item>
                    <div className="search_bar " >
                        <Searchbar />
                    </div>
                </Nav>

            </div>

        </ Container>
    )
}

export default NavBar