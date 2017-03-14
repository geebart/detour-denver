// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import { IndexLink, Link } from "react-router";

// LAYOUT
// import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";

// MAIN
export default class Main extends React.Component {
  render(){
    return(
      <div>
        <main>
          <section id="app-home">
            <div class="table"><div><div><div>
              <div class="wrap">
                <div class="vpc center">
                  <div class="form-wrap">
                    <h1>Detour: Denver</h1>
                    <h2>A Browser Game of Deduction and Sites</h2>
                    <p>
                      <Link to="join-game" class="button ghost" title="Join a Game (Game Key Needed)">Join a Game</Link>
                      <Link to="create-game" class="button" title="Start a Game">Create Game</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div></div></div>
          </section>
      	</main>
        <Footer />
      </div>
    );
  }
}
