import React, { Component } from 'react';
import './Container.css'
import FrontAntiRollBar from './components/FrontAntiRollBar'
import RearAntiRollBar from './components/RearAntiRollBar'
import FrontSprings from './components/FrontSprings'
import RearSprings from './components/RearSprings'
import FrontReboundStiffness from './components/FrontReboundStiffness'
import RearReboundStiffness from './components/RearReboundStiffness'
import { Container, Row, Col, Card, CardHeader, CardBlock, Alert } from 'reactstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div>
        <Container className="frontanti-container">
        <Row>
          <Col md="3">
            <Card block>
              <CardHeader>FrontAntiRollBar</CardHeader>
              <FrontAntiRollBar></FrontAntiRollBar>
            </Card>
          </Col>
          <Col md="3">
            <Card block>
              <CardHeader>RearAntiRollBar</CardHeader>
              <RearAntiRollBar></RearAntiRollBar>
            </Card>
          </Col>
          <Col md="3">
            <Card block>
              <CardHeader>FrontSprings</CardHeader>
              <FrontSprings></FrontSprings>
            </Card>
          </Col>
           <Col md="3">
            <Card block>
              <CardHeader>RearSprings</CardHeader>
              <RearSprings></RearSprings>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
        <div>
        <Container className="frontanti-container">
        <Row>
          <Col md="6">
            <Card block>
              <CardHeader>FrontReboundStiffness</CardHeader>
              <FrontReboundStiffness></FrontReboundStiffness>
            </Card>
          </Col>
          <Col md="6">
            <Card block>
              <CardHeader>RearReboundStiffness</CardHeader>
              <RearReboundStiffness></RearReboundStiffness>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
      </div>
    );
  }
}

export default App;
