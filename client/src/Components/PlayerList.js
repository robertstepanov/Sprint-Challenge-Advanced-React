import React, { Component } from "react";
import axios from "axios";

export default class PlayerList extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      const players = res.data;
      this.setState({ players });
      console.log(players);
    });
  }

  render() {
    return (
      <ul>
        {this.state.players.map(player => (
          <li>
            {player.name} {player.country} {player.searches}
          </li>
        ))}
      </ul>
    );
  }
}
