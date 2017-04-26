import React from 'react';
import { Well, FormGroup, ControlLabel } from 'react-bootstrap';

class RepositoryList extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'RepositoryList' };
  }

  render() {
    return (
      <Well>
        <form >
          <FormGroup controlId="formRepoList">
            <ControlLabel>Repository List</ControlLabel>
          </FormGroup>
        </form>
      </Well>
    )
  }

}

export default RepositoryList;
