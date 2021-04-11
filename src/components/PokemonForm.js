import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state= {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [`${target.name}`]: target.value
    })
  }

  submitForm = event => {
    event.preventDefault();
    this.props.createPokemon(this.state);
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''  
    })
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitForm}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleInputChange} value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInputChange} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleInputChange} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleInputChange} value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  };
};

export default PokemonForm;