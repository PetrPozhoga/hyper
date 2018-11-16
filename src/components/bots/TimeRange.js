import React, { Component } from 'react'

class TimeRange extends Component {
  constructor(props) {
    super(props)
    this.timeRange = [
      { code: '24h', name: '24h' },
      { code: '7d', name: '7 days' },
      { code: '30d', name: '30 days' },
      { code: 'all_time', name: 'All time' }
    ]
  }

  setActiveRange(code, e) {
    e.preventDefault()
    this.props.setRange(code)
  }

  render() {
    return (
      <div className='time-range'>
        <span className='time-range__title'>Time Range:</span>
        { this.timeRange.map((item, index) =>
          <button key={ index }
                  onClick={this.setActiveRange.bind(this, item.code)}
                  className={this.props.activeRange === item.code ? 'time-range__btn time-range__btn-active' : 'time-range__btn' }>
            { item.name }
          </button>
        ) }
      </div>
    )
  }
}

export default TimeRange