// DEPENDENCIES
import React from "react";
import * as firebase from "firebase";

// LAYOUT COMPONENTS
import Footer from "../components/layout/Footer.js";

// GAME STATUS PAGES
import GameLobby from "./GameLobby.js"
import GamePlaying from "./GamePlaying.js"
import GameEnd from "./GameEnd.js"

// MAIN
export default class Game extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    this.state.game = {};
    this.state.tourist = {};

    this.updateGameStatus = this.updateGameStatus.bind(this);
  }

  componentDidMount(){

    // GET GAME KEY
    const gameKey = this.props.params.game;

    // GET GAME FIREBASE
    const game = firebase.database().ref().child('game/' + gameKey);

    // SET STATE GAME
    game.on("value", data => {

      this.setState({game: data.val()});

      if(typeof localStorage.player === "undefined"){
        localStorage.player = "";
        this.props.history.pushState(null, '/');
      }
    });

  }

  removePlayer(player){

    // BUILD GAME KEY
    const gameKey = this.game.key;

    // GET PLAYERS IN DB
    const test = firebase.database().ref().child('game/' + gameKey + '/players');

    // READ DATA
    test.on("value", data => {

      // GET INDEX OF PLAYER IN DB
      const index = data.val().indexOf(player);

      // REMOVE PLAYER
      firebase.database().ref().child('game/' + gameKey + '/players').child(index).remove();

      // GO TO HOMEPAGE
      this.props.history.pushState(null, '/')
    });
  }

  updateGameStatus(status){

    // CACHE GAME
    const game = this.state.game;

    // PREP ASSIGN ROLES
    game.assignRoles = {};

    // SET CACHE STATUS
    game.status = status;

    const playersArray = game.players;

    console.log(playersArray);

    // SHUFFLE PLAYERS
    var currentIndex = playersArray.length, temporaryValue, randomIndex;

    // WHILE SHUFFLE
    while (0 !== currentIndex) {

      // SELECT A REMAINING ELEMENT
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // SWAP ELEMENT
      temporaryValue = playersArray[currentIndex];
      playersArray[currentIndex] = playersArray[randomIndex];
      playersArray[randomIndex] = temporaryValue;
    }

    console.log(playersArray);

    const assignRoles = {};

    playersArray.forEach(function(player, index){
        if(index == 0){
          assignRoles[player] = "Tourist";
        } else{
          assignRoles[player] = game.location.roles[index];
        }
    });

    console.log(assignRoles);

    game.assignRoles = assignRoles;

    console.log(game);

    firebase.database().ref().child('game/' + game.key).set(game);
    this.setState(game);
  }

  render(){

    const game = this.state.game;
    const players = game.players

    return(
      <div>
        <main>
          <section id="game" class="game-page">
            {game.status == "lobby" &&
              <GameLobby game={game} updateGameStatus={this.updateGameStatus} removePlayer={this.removePlayer} />
            }
            {game.status == "playing" &&
              <GamePlaying game={game} updateGameStatus={this.updateGameStatus}/>
            }
            {game.status == "end" &&
              <GameEnd game={game} />
            }
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
