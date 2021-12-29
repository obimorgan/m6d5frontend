import { Container, Nav } from "react-bootstrap";
import "./Navbar.css"

const NavBar = () => {
    return (
        <Container fluid>
            <div className="d-flex align-items-center" >
                <Nav
                    activeKey="/home"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="search_bar" >
                    <input type="text" placeholder="Search product..." />
                </div>
            </div>
        </ Container>
    )
}

export default NavBar