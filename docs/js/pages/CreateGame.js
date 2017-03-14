// DEPENDENCIES
import React from "react";
import * as firebase from "firebase";
import { Link } from "react-router";

// LAYOUT COMPONENTS
import Footer from "../components/layout/Footer.js";

// MAIN
export default class CreateGame extends React.Component {

  constructor(props){
    super(props)
    this.state = {};
    this.state.game = {};
    this.state.gameKey = "";
    this.state.gamePlayer = "";
    this.state.locations =
    [{
      "name": "Red Rocks Amphitheater",
      "roles":[
        "Security",
        "Boygaurd",
        "Deadhead",
        "Vocalist",
        "Guitarist",
        "Drummer",
        "Sleepy Concert Goer",
        "Merch Vendor",
        "Roadie",
        "Diehard Fan"
      ]
    },
    {
      "name": "Rocky Mountain National State Park",
      "roles":[
        "Park Ranger",
        "Excited Camper",
        "Slow Old Woman",
        "Sleepy Child",
        "Photog",
        "Hippie",
        "Angry Dad",
        "Fearless Child",
        "First-Timer",
        "Bored Teen"
      ]
    },
    {
      "name": "Coors Field",
      "roles":[
        "Security",
        "Pitcher",
        "Beer Vendor",
        "Drunken Fan",
        "Loud Heckler",
        "Bored Child",
        "Confident Old Man",
        "Mascot",
        "Announcer",
        "Camera Man"
      ]
    }];

    this.inputPlayerChange = this.inputPlayerChange.bind(this);
    this.inputKeyChange = this.inputKeyChange.bind(this);
    this.submitGame = this.submitGame.bind(this);
  }

  inputPlayerChange(event){
    this.setState({"gamePlayer": event.target.value});
  }

  inputKeyChange(event){
    this.setState({"gameKey": event.target.value});
  }

  submitGame(event){

    // GAMEKEY
    const gameKey = this.state.gameKey;

    // PLAYER
    const gamePlayer = this.state.gamePlayer;

    // CACHE LOCATIONS
    const locations = this.state.locations;

    // SELECT A RANDOM LOCATION
    const location = locations[Math.floor(Math.random()*locations.length)];

    // SET GAME STATE
    this.state.game = {
      "key": gameKey,
      "status": "lobby",
      "players": [
        gamePlayer
      ],
      "location": location,
      "locations": locations,
      "assignRoles": {}
    }

    // CACHE GAME
    const game = this.state.game;

    // ADD GAME TO FIREBASE
    firebase.database().ref().child('game/' + gameKey).set(game);

    // SET USER IN LOCAL STORAGE
    localStorage.setItem('player', gamePlayer);

    // REDIRECT USER TO NEW GAME
    this.props.history.push('/game/' + this.state.game.key);

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
                  <form class="form-wrap" onSubmit={this.submitGame}>
                    <h3>Create a Game</h3>
                    <label for="player-name">Enter Your Name</label>
                    <input type="input" name="player-name" onChange={this.inputPlayerChange} maxLength="24" value={this.state.gamePlayer} placeholder="John Doe" />
                    <label for="key">Enter Game Key</label>
                    <input type="input" name="key" onChange={this.inputKeyChange} maxLength="6" value={this.state.gameKey} placeholder="QWERTY"/>
                    <Link to="/" class="button ghost">Back</Link>
                    <input class="button" type="submit" value="Enter Game Lobby" />
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
