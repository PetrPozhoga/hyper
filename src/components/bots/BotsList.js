import React, { Component } from 'react'
import dataBots from '../../resources/data.min'

import Bot from "./Bot"
import TimeRange from "./TimeRange"

class BotsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bots: dataBots.bots,
      activeBot: JSON.parse(localStorage.getItem('activeBot')),
      timeRange: JSON.parse(localStorage.getItem('timeRange')) || 'all_time'
    }
    this.selectBot = this.selectBot.bind(this)
    this.setActiveRange = this.setActiveRange.bind(this)
  }

  selectBot(id) {
    localStorage.setItem('activeBot', JSON.stringify(id))
    this.setState({ activeBot: id })
  }

  setActiveRange(value) {
    localStorage.setItem('timeRange', JSON.stringify(value))
    this.setState({ timeRange: value })
  }

  render() {
    return (
      <div>
        <Bot bots={ this.state.bots }
             timeRange={ this.state.timeRange }
             activeBot={ this.state.activeBot }
             select={ this.selectBot }
        />
        <TimeRange
          activeRange={ this.state.timeRange }
          setRange={ this.setActiveRange }/>
      </div>
    )
  }
}

export default BotsList