import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bot from './bot/bot.js';
import HelloPlugin from './bot/plugins/hello.js';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ''
    };
  }

  handleChange = async event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Start the bot
   **/
  handleSubmit = async event => {
    event.preventDefault();
    let bot = new Bot({token: this.state.token});
    bot.add_plugin(new HelloPlugin());
    bot.start();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your Discord Token:</label>
          <input
            type="text"
            name="token"
            value={this.state.token}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            name="start"
            value="Start the bot"
          />
        </form>
      </div>
    );
  }
}

export default App;
