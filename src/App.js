import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import {
  Grid, Row, Col, FormGroup, FormControl, Button
} from 'react-bootstrap';

class App extends Component {
  handleClick() {

  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col md={12}>
              <h1>Redux Character Count</h1>
              <p>Paste some text, click count and see results!</p>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col md={12}>
              <h2>1. Paste some text</h2>
              <FormGroup>
                <FormControl componentClass="textarea" placeholder="Paste text here..." style={{height: 300}}></FormControl>
              </FormGroup>
              <Button bsStyle="primary" style={{width:'100%', fontSize:'2em'}}>Count</Button>
            </Col>
          </Row>
        </Grid>

        <hr />

        <Grid>
          <Row>
            <Col md={12}>
              <h2>2. Result</h2>
              <h3>Total characters found: </h3>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
