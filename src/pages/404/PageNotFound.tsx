import React from 'react'
import { Result } from 'antd'

import styles from './PageNotFound.module.css'

export const PageNotFound: React.FC = () => {
  return (
    <Result
      className={styles.result}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  )
}
