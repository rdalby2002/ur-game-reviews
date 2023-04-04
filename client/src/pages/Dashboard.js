import React from 'react';
import Navbar from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TopRated from '../pages/TopRated';

function Dashboard() {
    return (
        <>
            <Row>
                <Col sm={4}>
                    <Navbar />
                </Col>
                <Col sm={8}>
                    
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;