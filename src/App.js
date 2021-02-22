import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Component/Header';
import SwipeButtons from './Component/SwipeButtons';
import TinderCards from './Component/TinderCards';
import Chats from './Component/Chats';
import ChatScreen from './Component/ChatScreen';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
