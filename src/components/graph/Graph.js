import React, { Component } from 'react'

class Graph extends Component {
  render() {
    return (
      <ul className='graph'>
        <h1 className='graph-percent'>+32.6%</h1>
        <img src="./media/graph.png" className='graph-bg' alt=""/>
        {[0,1,2,3,4].map((item, index) =>
          <li className='graph__item' key={index}>
            <span>22.04</span>
          </li>
        )}
      </ul>
    )
  }
}

export default Graph

