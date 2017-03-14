// APP DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import Scrollchor from 'react-scrollchor';
import * as firebase from "firebase";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// FIREBASE CONFIG
const config = {
  apiKey: "AIzaSyDYlEr0wKzm_T44i6eDrEltZkgq_RA7JDM",
  authDomain: "detour-denver.firebaseapp.com",
  databaseURL: "https://detour-denver.firebaseio.com",
  storageBucket: "detour-denver.appspot.com",
  messagingSenderId: "292463765049"
};

// INITIALIZE FIREBASE
firebase.initializeApp(config);

// LAYOUT
import Layout from "./pages/Layout.js";
// import Footer from "./components/layout/Header.js";
import Header from "./components/layout/Footer.js";

// PAGES
import Main from "./pages/Main.js";
import CreateGame from "./pages/CreateGame.js";
import JoinGame from "./pages/JoinGame.js";
import Game from "./pages/Game.js";

// APP MOUNT
const app = document.getElementById('app');

// ROUTES
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Main}></IndexRoute>
      <Route path="create-game" name="create-game" component={CreateGame} />
      <Route path="join-game" name="join-game" component={JoinGame} />
      <Route path="game/(:game)" name="game" component={Game} />
    </Route>
  </Router>,
app);
