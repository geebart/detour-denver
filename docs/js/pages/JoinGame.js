// DEPENDENCIES
import React from "react";
import * as firebase from "firebase";
import { Link } from "react-router";

// LAYOUT COMPONENTS
import Footer from "../components/layout/Footer.js";

// MAIN
export default class JoinGame extends React.Component {

  constructor(props){
    super(props)
    this.state = {};
    this.state.game = {};
    this.state.game.players = [];
    this.state.gameKey = "";
    this.state.gamePlayer = "";

    this.inputPlayerChange = this.inputPlayerChange.bind(this);
    this.inputKeyChange = this.inputKeyChange.bind(this);
    this.joinGame = this.joinGame.bind(this);
  }

  inputKeyChange(event){
    this.setState({"gameKey": event.target.value});
  }
  inputPlayerChange(event){
    this.setState({"gamePlayer": event.target.value});
  }

  joinGame(event){

    // GAMEKEY
    const gameKey = this.state.gameKey;

    // PLAYER
    const gamePlayer = this.state.gamePlayer;

    // GET GAME FIREBASE
    const game = firebase.database().ref().child('game/' + gameKey).once('value').then(function(data){

      const game = data.val();

      console.log(game);

      // BUILD UPDATE STATE
      const playersLength = game.players.length;

      console.log(playersLength);

      // UPDATE LIVE
      firebase.database().ref().child('game/' + gameKey + '/players/' + (playersLength)).set(gamePlayer);
    });

    // SET USER IN LOCAL STORAGE
    localStorage.setItem('player', gamePlayer);

    // REDIRECT USER TO NEW GAME
    this.props.history.push('/game/' + this.state.gameKey);

    // PREVENT REAL PAGE REFRESH
    event.preventDefault();
  }

  render(){
    return(
      <div>
        <main>
          <section id="create-game">
            <div class="table"><div><div><div>
              <div class="wrap">
                <div class="vpc center">
                  <form class="form-wrap" onSubmit={this.joinGame}>
                    <h3>Join a Game</h3>
                    <label for="player-name">Player Name</label>
                    <input type="input" name="player-name" onChange={this.inputPlayerChange} maxLength="24" value={this.state.gamePlayer} placeholder="John Doe" />
                    <label for="key">Game Key</label>
                    <input type="input" name="key" onChange={this.inputKeyChange} maxLength="6" value={this.state.gameKey} placeholder="QWERTY" />
                    <Link to="/" class="button ghost">Back</Link>
                    <input class="button" type="submit" value="Join Game" />
                  </form>
                </div>
              </div>
            </div></div></div></div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
