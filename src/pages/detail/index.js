import React, { PureComponent } from 'react'

class Detail extends PureComponent {
  render () {
    return (
      <div>{this.props.match.params.id}</div>
    )
  }
}

export default Detail