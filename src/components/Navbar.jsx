import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import ContactModal from './ContactModal';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';




export default function Navigation () {
  const bitmoji = {
    height: '100px',
    width: '100px'
  }

  const navText = {
    fontSize: "25px",
    fontWeight: 'bold',
    // fontFamily: 'papyrus'
  }


  return (
    <Navbar expand="xl" className="bg-secondary">
      <Container>
        
        <Navbar.Brand style={navText} href="#about-me"> <img style={bitmoji}src="../img/bitmoji.png" alt="Bitmoji of Lauren Playing Video Games" />Lauren Bleyl <span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
            <NavDropdown title="Sections" id="basic-nav-dropdown">
              <NavDropdown.Item href="#about-me">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="https://docs.google.com/document/d/140-KvFauwn38hlr5hihrapTX6S5ls0KiIBmuJEIXVZs/edit?usp=sharing" target="_blank">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
                <ContactModal></ContactModal>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}