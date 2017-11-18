import React from 'react';
import { Grid,Row,Col } from 'react-bootstrap' ;
import NavBar from '../components/NavBar';

const NotFound =() => (
    <div className="App">
        <NavBar />
        <Grid >
            <Row>
                <Col lgOffset={6}>
                <h3>Úbbs! Síðan fanst ekki.</h3>
                </Col>
            </Row>
            
        </Grid>
    </div>
)
export default NotFound;