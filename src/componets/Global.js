import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Container, Col, Row } from 'react-bootstrap';

const api = {
    base: "https://coronavirus-19-api.herokuapp.com/all"
}

const About = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(`${api.base}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
            .catch(e => {
                console.log(e);
            })
    });

    return (
        <div className="container">
            <Container>
                <img style={{ marginTop: '50px' }} alt="" src="/img/world.svg.png" width="240" height="120" className="center" />
                <h3 style = {{marginTop:'50px',textAlign:'center'}} className="text-uppercase">Global Stats</h3>
                <Row className="mt-3">
                    <Col >
                        <div className="country ">
                            <Card className="text-left bg-1 text-light" style={{ width: '18rem' }}>
                                <h2 className="text-uppercase text-center text-light">cases</h2>
                                <h4 className="text-center text-light">{data.cases}</h4>
                            </Card>
                        </div>

                    </Col>
                    <Col >
                        <div className="country ">
                            <Card className="text-left bg-2 text-light" style={{ width: '18rem' }}>
                                <h2 className="text-uppercase text-center text-light">deaths</h2>
                                <h4 className="text-center text-light">{data.deaths}</h4>
                            </Card>
                        </div>

                    </Col>
                    <Col>
                        <div className="country ">
                            <Card className="text-left bg-3 text-light" style={{ width: '18rem' }}>
                                <h2 className="text-uppercase text-center text-light">recovered</h2>
                                <h4 className="text-center text-light">{data.recovered}</h4>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};


export default About;