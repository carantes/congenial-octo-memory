import React from 'react';
import { Well, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

class FindUser extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  getInitialState() {
    return {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length >= 5) return 'success';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Well>
        <form >
          <FormGroup
            controlId="formFindUser"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Find User</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Digite o nome do usuário do Github"
              onChange={this.handleChange.bind(this)}
            />
            <FormControl.Feedback />
            <HelpBlock>Nome do usuário deve ter no mínimo 5 caracteres.</HelpBlock>

            <Button bsStyle="info">GO</Button>
          </FormGroup>
        </form>
      </Well>
    )
  }

}

export default FindUser;
