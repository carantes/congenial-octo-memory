import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FindUser from './FindUser'
import RepositoryList from './RepositoryList'
import WriteReview from './WriteReview'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={8} md={4}><FindUser /></Col>
          <Col xs={4} md={8}><WriteReview /></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={8} md={4}><RepositoryList /></Col>
        </Row>
      </Grid>
    );
  }
}