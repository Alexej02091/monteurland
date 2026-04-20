import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import SearchBar from "./SearchBar";


const Header = () => {
    return (
        <header style={{ borderBottom: "1px solid #eee"}}>
            <Navbar bg="white" expand="lg" className="py-3">
                <Container>

                    {/* Logo */}
                    <Navbar.Brand href="/">
                        <Image
                            src="/Logo.png"
                            alt="Logo"
                            height={40}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-nav" />
                    <Navbar.Collapse id="main-nav">

                        {/* Navigation */}
                        <Nav className="me-auto">
                            <Nav.Link href="#zimmer">Monterzimmer</Nav.Link>
                            <Nav.Link href="#vermieter">Für Vermieter</Nav.Link>
                            <Nav.Link href="magazin">Magatin</Nav.Link>
                        </Nav>

                        {/* Login */}
                        <Button variant="outline-primary">Login</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Suchfeld unter dem Header */}
            <div style={{ background: "#f8f9a", padding: "20px 0"}}>
                <Container>
                    <SearchBar />
                </Container>
            </div>
        </header>
    );
};

export default Header;