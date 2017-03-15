// DEPENDENCIES
import React from "react";

// LAYOUT COMPONENTS
import Footer from "../components/layout/Footer.js";

// MAIN
export default class GameLobby extends React.Component {

  constructor(props){
    super(props)

    this.startGame = this.startGame.bind(this);
    this.leaveGame = this.leaveGame.bind(this);
  }

  startGame(){
    this.props.updateGameStatus('playing');
  }

  leaveGame(){
    const player = localStorage.getItem('player');
    this.props.removePlayer(player);
  }

  render(){

    const game = this.props.game;
    const players = game.players;

    return(
        <section id="game-lobby">
          <div class="table"><div><div><div>
            <div class="wrap">
              <div class="form-wrap">
                <h3>Game Lobby</h3>
                <p>Please wait for players to join this game.</p>
                <hr />
                <h5>Player List</h5>
                <ol class="player-list">
                  {
                    players.map(function(player, index){
                      return(
                        <li key={index}>{player}</li>
                      )
                    })
                  }
                </ol>
                <a class="button ghost" onClick={() => this.leaveGame(players)} to="/">End Game</a>
                <a class="button" onClick={this.startGame}>Start Game</a>
            </div>
          </div>
        </div></div></div></div>
      </section>
  );
  }
}
