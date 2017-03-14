// DEPENDENCIES
import React from "react";

// LAYOUT COMPONENTS
import Footer from "../components/layout/Footer.js";

// MAIN
export default class GamePlaying extends React.Component {

  constructor(props){
    super(props)

    console.log(this);

    this.endGame = this.endGame.bind(this);
  }

  endGame(){
    this.props.updateGameStatus('end');
  }

  render(){

    const game = this.props.game;
    const players = game.players;

    const role = game.assignRoles[localStorage.player];
    const isTourist = (role == "Tourist") ? true : false;
    const location = game.location.name;
    const locations = game.locations;

    return(
      <div>
        <main>
          <section id="playing-game">
            <div class="table"><div><div><div>
              <div class="wrap">
                <div class="vpc center">
                  <div class="form-wrap">
                    <h3>Game On!</h3>
                    <hr />
                    <div class="you-are">
                      {
                        isTourist ? (
                          <div>
                            <h4>You are the tourist!</h4>
                            <p><u>Don't reveal yourself. Discover the location.</u></p>
                          </div>
                        ) : (
                          <div>
                            <h4>You are <strong>NOT</strong> the tourist!</h4>
                            <p>
                              <strong>Location</strong>: {location}<br />
                              <strong>Role</strong>: {role}
                            </p>
                          </div>
                        )
                      }
                    </div>
                    <hr />
                    <h6>Location List</h6>
                    <ul class="player-list locations">
                      {
                        locations.map(function(location, index){
                          return(
                            <li key={index}>{location.name}</li>
                          )
                        })
                      }
                    </ul>
                    <h6>Player List</h6>
                    <ul class="player-list players">
                      {
                        players.map(function(player, index){
                          return(
                            <li key={index}>{(index == 0) ? <small>1<sup>st</sup></small> :""}{player}</li>
                          )
                        })
                      }
                    </ul>
                    <a class="button" onClick={this.endGame}>End Game</a>
                  </div>
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
