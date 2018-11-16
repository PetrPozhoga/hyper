import React, { Component } from 'react'

import data from '../../resources/data.min'

class Balance extends Component {
  constructor(props) {
    super(props)
    this.balanceTrade = {
      balance: data.balance,
      onHold: data.on_hold,
      tradingCurrency: data.trading_capital_currency,
      tradingCapital: data.trading_capital
    }
  }
  render() {
    return (
      <div className='balance'>
        <span className='balance-capital-title'>trading  capital</span>
        <div className='balance-item'>
          <h1 className='balance-item__capital'>
            { this.balanceTrade.tradingCapital } { this.balanceTrade.tradingCurrency.toUpperCase() }
            </h1>
        </div>
        <div className='balance-item'>
          <p className='balance-item__total-balance'>balance:
            <span>{ this.balanceTrade.balance }</span>
            <img src="./media/balance.svg" alt=""/>
          </p>
          <p className='balance-item__hold'>on hold:
            <span>{ this.balanceTrade.onHold }</span>
            <img src="./media/balance.svg" alt=""/>
          </p>
        </div>
      </div>
    )
  }
}

export default Balance