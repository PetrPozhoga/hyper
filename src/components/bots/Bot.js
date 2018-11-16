import React, { Component } from 'react'

class Bot extends Component {
  constructor(props) {
    super(props)
    this.botsCharacteristic = [ 'attack', 'place bot<br> here', 'balance', 'defence', 'megabot', 'attack' ]
  }

  setActiveBot(id) {
    this.props.select(id)
  }

  render() {
    return (
      <div className='bot'>
        { this.props.bots.map((item, index) =>
          <div className={ index === this.props.activeBot ? 'bot-item bot-item-active' : 'bot-item' } key={ index }
               onClick={ this.setActiveBot.bind(this, index) }>
            { item.name === 'yellow_bot' && <img src="./media/arrows.svg" className='bot-item-arows' alt=""/> }
            <span
              className={ item.name !== 'yellow_bot' ? `icon-bot ${item.name}` : `icon-megaBot ${item.name}` }>
            </span>
            <div
              className={ index === 1 ? 'bot-item__characteristic bot-item__characteristic-place-bot' : 'bot-item__characteristic' }
              dangerouslySetInnerHTML={ { __html: this.botsCharacteristic[ index ] } }>
            </div>
            { index !== 1 &&
            <div className='bot-item__percent'>
              <span
                className={ item[ this.props.timeRange ] < 0 ? 'bot-item__percent-minus' : 'bot-item__percent-plus' }>
                { item[ this.props.timeRange ] }%
              </span>
            </div>
            }
          </div>
        ) }
      </div>
    )
  }
}

export default Bot