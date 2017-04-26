import React from 'react';
import { Well, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

class WriteReview extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'WriteReview' };
  }

  render() {
    return (
      <Well>
        <form >
          <FormGroup controlId="formWriteReview">
            <ControlLabel>Write a Review</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
        </form>
      </Well>
    )
  }

}

export default WriteReview;
