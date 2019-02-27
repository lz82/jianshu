import React, { PureComponent } from 'react'
import { fromJS } from 'immutable'
import { Link } from 'react-router-dom'
import * as styles from './sidebar-category.module.scss';

class SidebarCategory extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: fromJS([
        {
          name: '简书会员',
          bg: '/img/c1.png'
        },
        {
          name: '7日热门',
          bg: '/img/c2.png'
        },
        {
          name: '30日热门',
          bg: '/img/c3.png'
        },
        {
          name: '优选连载',
          bg: '/img/c4.png'
        },
        {
          name: '简书版权',
          bg: '/img/c5.png'
        },
        {
          name: '简书大学堂',
          bg: '/img/c6.png'
        }
      ])
    }
  }

  render () {
    return (
      <ul className={styles.wrapper}>
        {
          this.state.categoryList.map((item, index) => {
            return (
              <Link 
                to="/"
                key={index}
              >
                <li 
                  className={styles.item}
                  style={{
                    background: `url(${item.get('bg')}) no-repeat`
                  }}
                />
              </Link>
            )
          })
        }
      </ul>
    )
  }
}

export default SidebarCategory