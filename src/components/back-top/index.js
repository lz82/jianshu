import React, { Component } from 'react'
import * as styles from './back-top.module.scss'

class BackTop extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showTop: false
    }

    this.bindScroll = this.bindScroll.bind(this)
  }

  render () {
    return (
      <span
        className={`${styles['back-to-top']} ${this.state.showTop ? styles.active: ''}`}
        onClick={this.handleClick}
      >
        <i className="iconfont icon-arrowup" />
      </span>
    )
  }

  bindScroll () {
    const top = document.documentElement.scrollTop
    console.log(top);
    
    if (top > 100) {
      this.setState({
        showTop: true
      })
    } else {
      this.setState({
        showTop: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.bindScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.bindScroll)
  }

  handleClick () {
    window.scrollTo(0, 0)
  }
}

export default BackTop