import React, {Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      kaupunki: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({kaupunki: event.target.value});
  }

  handleSubmit(event) {
    this.props.getCity(this.state.kaupunki)
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Hae kaupungin nimellä</p>
          <input type='text' value={this.state.kaupunki} onChange={this.handleChange} />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default Search;
