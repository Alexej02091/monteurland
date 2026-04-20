import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GeoAlt, People } from "react-bootstrap-icons";

function SearchBar() {
    return (
        <Form
            style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}
            >
            <Row className="g-3">

                {/* Ort */}
                <Col md={6}>
                    <div style={{ position: "relative" }}>
                    <GeoAlt
                        size={20}
                        style={{
                            position: "ansolute",
                            top: "50%",
                            left: "12px",
                            transform: "translateY(-50%)",
                            color: "#888"
                        }}
                        />
                    <Form.Control
                        type="text"
                        placeholder="Ort oder PLZ eingeben"
                        size="lg"
                        style={{ paddingLeft: "40px" }}
                    />
                    </div>
                </Col>

                {/* Personen */}
                <Col md={3}>
                <div style={{ position: "relative" }}>
                    <People
                        size={20}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "12px",
                            transform: "translateY(-50%)",
                            color: "#888"
                        }}
                        />
                    <Form.Control
                        type="number"
                        placeholder="Personen"
                        size="lg"
                        min="1"
                        style={{ paddingLeft: "40px" }}
                    />
                    </div>
                </Col>

                {/* Button */}
                <Col md={3}>
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-100"
                        style={{
                            fontWeight:600,
                            borderRadius: "8px"
                        }}
                    >
                        Suche
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default SearchBar;