import React, { Component } from 'react';
import './Container.css'
import FrontAntiRollBar from './FrontAntiRollBar'
import RearAntiRollBar from './RearAntiRollBar'
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
              <FrontAntiRollBar></FrontAntiRollBar>
            </Card>
          </Col>
           <Col md="3">
            <Card block>
              <CardHeader>RearSprings</CardHeader>
              <FrontAntiRollBar></FrontAntiRollBar>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
        <div>
        <Container className="frontanti-container">
        <Row>
          <Col md="4">
            <Card block>
              <CardHeader>FrontAntiRollBar</CardHeader>
              <FrontAntiRollBar></FrontAntiRollBar>
            </Card>
          </Col>
          <Col md="4">
            <Card block>
              <CardHeader>RearAntiRollBar</CardHeader>
              <RearAntiRollBar></RearAntiRollBar>
            </Card>
          </Col>
          <Col md="4">
            <Card block>
              <CardHeader>FrontSprings</CardHeader>
              <FrontAntiRollBar></FrontAntiRollBar>
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
