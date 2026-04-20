import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchBar() {
    return (
        <Form>
            <Row className="g-2">

                {/* Ort */}
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Ort oder PLZ eingeben"
                        size="lg"
                    />
                </Col>

                {/* Personen */}
                <Col md={3}>
                    <Form.Control
                        type="number"
                        placeholder="Personen"
                        size="lg"
                        min="1"
                    />
                </Col>

                {/* Button */}
                <Col md={3}>
                    <Button
                        variant="primary"
                        size="lg"
                        className="w-100"
                    >
                        Suche
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default SearchBar;