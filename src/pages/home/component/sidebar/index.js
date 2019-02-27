import React, { PureComponent } from 'react'
import SidebarCategory from '../sidebar-category'
import QRCode from '../qrcode'

class HomeSidebar extends PureComponent {
  render () {
    return (
      <div style={{marginLeft: "40px"}}>
        <SidebarCategory />
        <QRCode />
      </div>
    )
  }
}

export default HomeSidebar