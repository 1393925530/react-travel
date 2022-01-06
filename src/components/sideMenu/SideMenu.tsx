import React from 'react'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'
import { sideMenuList } from './mockup'

import styles from './SideMenu.module.css'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu
          key={`side-menu-${m.title}-${index}`}
          title={
            <span>
              <GifOutlined />
              {m.title}
            </span>
          }
        >
          {m.subMenu.map((sm, smindex) => (
            <Menu.SubMenu
              key={`sub-menu-${sm.title}-${smindex}-${index}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms, smsindex) => (
                <Menu.Item
                  key={`sub-sub-menu-${sms}-${smsindex}-${smindex}-${index}`}
                  title={
                    <span>
                      <GifOutlined />
                      {sms}
                    </span>
                  }
                ></Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}
