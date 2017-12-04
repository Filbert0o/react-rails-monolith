import React, { Component } from 'react';

class CerealShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cereal: {}
    }

  }

  componentDidMount() {
    let cerealId = this.props.params.id;


    fetch(`/api/cereals/${cerealId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       cereal: body.cereal
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <h1>I am: Cereal {this.state.cereal.name}</h1>
        <h3>{this.state.cereal.description}</h3>
      </div>
    )
  }
}
export default CerealShowContainer;
