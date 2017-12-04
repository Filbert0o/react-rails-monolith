import React, { Component } from 'react';
import CerealIndexComponent from "../components/CerealIndexComponent"

class CerealsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cereals: []
    }

  }

  componentDidMount () {
  fetch('http://localhost:3000/api/cereals')
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
      cereals: body.cereals
    })
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    let cereals = this.state.cereals.map(cereal => {
      return(
        <CerealIndexComponent
          key={cereal.id}
          id={cereal.id}
          name={cereal.name}
          description={cereal.description}
        />
      )
    })
    return(
      <div>
        <h1>I am: Cereal Index Container</h1>
        {cereals}
      </div>
    )
  }
}
export default CerealsIndexContainer;
