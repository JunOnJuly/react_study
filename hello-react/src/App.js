import React from 'react';
import './App.css';
function SAYHELLO(props) {
  return (
    <h1>안녕, {props.name}</h1>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>아직 {this.state.date.toLocaleTimeString()} 이네</h1>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SAYHELLO name="싸피" />
        <Clock />
      </header>
    </div>
  );
}

export default App;
