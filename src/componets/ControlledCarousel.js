import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';

function ControlledCarousel() {


    return (
        <div className="container">
            <Container>
                <Row>
                    <Col xs={4} md={4}>
                        <Card style={{ width: '10rem', height:'5rem'}}>
                            <Card.Img width="60"  height="60" variant="top" src="/img/handwash.svg" />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card style={{ width: '10rem', height: '5rem'}}>
                            <Card.Img width="60" height="60" variant="top" src="/img/transport.svg" />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card style={{ width: '10rem', height: '5rem' }}>
                            <Card.Img width="60" height="60" variant="top" src="/img/handtouch.svg" />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default ControlledCarousel;