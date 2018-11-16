import React, { Component } from 'react'

import 'typeface-roboto'
import './assets/styles/main.sass'

import TitleBar from './components/titleBar/TitleBar'
import Balance from "./components/balance/Balance"
import Graph from "./components/graph/Graph"
import BotsList from "./components/bots/BotsList"
import ToolsBar from "./components/toolsBar/ToolsBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar/>
        <Balance/>
        <Graph/>
        <BotsList/>
        <ToolsBar/>
      </div>
    )
  }
}

export default App
