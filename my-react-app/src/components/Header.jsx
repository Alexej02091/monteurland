import { useState } from "react";
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import "./header.css";

export default function Header() {
    const [mobileOpen, setMobilOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("suchender");

    return (
        <header className="mmz-header">

            {/* Top AR */}
            <div className="mmz-topbar">
                <Container className="d-flex justify-content-end">
                    <div className="mmz-switch">
                        <span
                            className={
                                "mmz-switch-item " +
                                (activeTab === "suchender" ? "active" : "")
                            }
                            onClick={() => setActiveTab("suchender")}
                        >
                            Suchender
                        </span>
                        <span
                            className={
                                "mmz-switch-item " +
                                (activeTab === "vermieter" ? "active" : "")
                            }
                            onClick={() => setActiveTab("vermieter")}
                        >
                            Vermieter
                        </span>
                    </div>

                    <div className="mmz-flag flag-de"></div>
                </Container>
            </div>

            {/* Main Navigation */}
            <Navbar 
                expand="lg" 
                className={
                    "mmz-navbar " +
                    (activeTab === "suchender" ? "mmz-navbar-customer" : "mmz-navbar-landlord")
                }
            >
                <Container>

                    {/* Logo */}
                    <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
                        <Image src="/logo-icon.png" height={32} />
                        <Image src="/logo-text.svg" height={24} />
                    </Navbar.Brand>

                    {/* Burger */}
                    <List
                        size={32}
                        className="mmz-burger d-lg-none"
                        onClick={() => setMobilOpen(!mobileOpen)}
                    />

                    {/* Desktop Menu */}
                    <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
                        <Nav className="gap-3">
                            <Nav.Link href="/vorteile" className="mmz-item">Vorteile</Nav.Link>
                            <Nav.Link href="/news" className="mmz-item">Nachricht</Nav.Link>
                            <Nav.Link href="/fag-suchende" className="mmz-item">Häufig gestellte Fragen</Nav.Link>
                            <Nav.Link href="https://shop.mein-monteurzimmer.de/" target="_blank" className="mmz-item">Geschäft</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        {/* Mobile Menu */}
        {mobileOpen && (
            <div className="mmz-mobile d-lg-none">
                <Container>
                    <div className="d-flex gap-3 mb-3">
                        <span className="mmz-top-link active">Suchender</span>
                        <span className="mmz-top-link">Vermieter</span>
                    </div>

                    <Nav className="flex-column gap-2">
                         <Nav.Link href="/" className="mmz-item active">Suche</Nav.Link>
                         <Nav.Link href="/vorteile" className="mmz-item">Vorteile</Nav.Link>
                         <Nav.Link href="/news" className="mmz-item">Nachricht</Nav.Link>
                         <Nav.Link href="/faq-suchende" className="mmz-item">Häufig gestellte Fragen</Nav.Link>
                         <Nav.Link href="https://shop.mein-monteurzimmer.de/" target="_blank" className="mmz-item">Geschäft</Nav.Link>
                    </Nav>
                </Container>
            </div>
        )}

        </header>
    );
}