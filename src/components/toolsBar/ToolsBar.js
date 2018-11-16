import React, { Component } from 'react'

class ToolsBar extends Component {
  constructor(props) {
    super(props)
    this.tools = [
      { code: 'dashboard', name: 'Dashboard' },
      { code: 'botGraph', name: 'Megabot' },
      { code: 'botMarket', name: 'Bot Market' },
      { code: 'coins', name: 'Coin prices' },
      { code: 'profile', name: 'Profile' },
    ]
  }

  render() {
    return (
      <div className='tools-bar'>
        { this.tools.map((item, index) =>
          <div key={ index } className='tools-bar-item'>
            <span className={ `icon-${item.code} tools-bar__icon` }>
              { item.code === 'profile' &&
              <span className='tools-bar__icon-circle'>
                3
              </span>
              }
            </span>
            <span className='tools-bar__title'>
              { item.name }
              </span>
          </div>
        ) }
      </div>
    )
  }
}

export default ToolsBar