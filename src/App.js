import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyData: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20').then((response) => {
      console.log(response);
      return response.json();
    }).then((data) => {
      console.log(data);
      this.setState({
        dailyData: data.results,
      });
    });
  }


  render() {
    return (
      <div className="Nasa">
        <header>NASA</header>
        {this.state.dailyData !== null && this.state.dailyData.map(d => (
          <div>{d.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
