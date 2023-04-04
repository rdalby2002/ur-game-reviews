import React from 'react';
import Navbar from '../components/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Welcome from '../assets/images/welcome.png'

function Dashboard() {
    return (
        <>
            <Row>
                <Col sm={3}>
                    <Navbar />
                </Col>
                <Col sm={9}>
                    <img className='welcome' alt='welcome' src={Welcome}></img>
                
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;