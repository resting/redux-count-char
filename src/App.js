import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import {
  Grid, Row, Col, FormGroup, FormControl, Button
} from 'react-bootstrap';

import { countChar } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);

    this.sourcetext = '';
  }
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
                <FormControl componentClass="textarea" placeholder="Paste text here..." style={{height: 300}} inputRef={input=>{this.sourcetext = input}}></FormControl>
              </FormGroup>
              <Button bsStyle="primary" style={{width:'100%', fontSize:'2em'}} onClick={this.handleClick.bind(this)}>Count</Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    doCount: (text) => {
      dispatch(countChar(text))
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
