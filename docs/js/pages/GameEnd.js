// DEPENDENCIES
import React from "react";
import { IndexLink, Link } from "react-router";

// LAYOUT COMPONENTS
import Footer from "../components/layout/Footer.js";

// MAIN
export default class GameEnd extends React.Component {
  render(){
    return(
          <section id="end-game">
            <div class="table"><div><div><div>
              <div class="wrap">
                <div class="vpc center">
                  <div class="form-wrap">
                    <h3>Game Over</h3>
                    <p>Sorry, this game is over. Don't worry, another game is just around the corner!</p>
                    <p>&nbsp;</p>
                    <Link to="create-game" class="button">Create New Game</Link>
                  </div>
                </div>
              </div>
            </div></div></div>
          </div>
        </section>
    );
  }
}
