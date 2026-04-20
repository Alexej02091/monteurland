import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
       <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Meine App</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placehplder="Suche.."
                            className="me-2"
                        />
                        <Button variant="outline-primary">Suche</Button>
                    </Form>
                    
                </Navbar.Collapse>
            </Container>
       </Navbar>
    );
};

export default Header;