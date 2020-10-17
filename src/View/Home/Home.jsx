import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'

import './Home.css'

function Home() {
    return (
        <Container fluid className="p-0 m-0 bg-home">
            <Container className="mx-auto">
                <Row className="box-button-home">
                    <Col xs={12} lg={6} className="d-flex justify-content-center py-3">
                        <Button className="button-home">
                            <Link to="./map">نمایش نقشه</Link>
                        </Button>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center py-3">
                        <Button className="button-home">
                            <Link to="./search">جستجوی نشانی</Link>
                        </Button>
                    </Col>
                </Row>

                <div className="box-text-home py-4 px-5">
                    <h3 className="text-center">سلام</h3>
                    <p className="text-center mt-4">امیدوارم از دیدن این تسک تمرینی لذت ببرید</p>
                </div>
            </Container>
        </Container>
    )
}

export default Home
