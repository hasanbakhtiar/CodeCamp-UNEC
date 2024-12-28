import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Navbar.Brand href="https://github.com" target='_blank' className='d-flex align-items-center'><span className='me-1'><FaGithub />
                        </span>Github Finder</Navbar.Brand>
                </Nav>
            </Navbar.Collapse>
        </Container>
  </Navbar >
  )
}

export default Header