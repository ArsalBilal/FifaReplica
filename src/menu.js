import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Menu() {
    return (  
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to="/" style={{textDecoration:"none"}}>  <Navbar.Brand href="#home" >Web Broker</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Marketing"><Link to="/marketing"><button type="button" class="btn btn-secondary">Marketing</button></Link></Nav.Link>
            <Nav.Link href="#Seller"><Link to="/seller"><button type="button" class="btn btn-secondary">Selling</button></Link></Nav.Link>
            <NavDropdown title="Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#about"><button type="button" class="btn btn-secondary">About Us</button></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <button type="button" class="btn btn-secondary">Score Board</button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#Blog"><button type="button" class="btn btn-secondary">Blog</button></NavDropdown.Item>
             
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="signup"><Link to="/signup"><button type="button" class="btn btn-secondary">Sign In</button></Link></Nav.Link>
            <Nav.Link eventKey={2} href="#login">
            <Link to="/login"><button type="button" class="btn btn-secondary"npm >Login</button></Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}

export default Menu;