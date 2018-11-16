import React, { Component } from 'react'

class TitleBar extends Component {
  render() {
    return (
      <header className='title-bar'>
        <img src='./media/burger.svg'
             className='title-bar__icon icon-burger' alt='burger'/>
        <h1>Dashboard</h1>
        <span className='title-bar__icon icon-refresh'></span>
      </header>
    )
  }
}

export default TitleBar