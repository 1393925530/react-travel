import React from 'react'
import { Col, Row, Image, Divider } from 'antd'

import microSrc from '../../assets/images/microsoft-80658_640.png'
import ytbSrc from '../../assets/images/icon-720944_640.png'
import igSrc from '../../assets/images/follow-826033_640.png'
import fbSrc from '../../assets/images/facebook-807588_640.png'
import styles from './CollaborateCompany.module.css'

export const CollaborateCompany: React.FC = () => {
  return (
    <div>
      <Divider orientation="left">合作企业</Divider>
      <Row>
        <Col span={6} className={styles.company}>
          <Image src={microSrc} />
        </Col>
        <Col span={6} className={styles.company}>
          <Image src={ytbSrc} />
        </Col>
        <Col span={6} className={styles.company}>
          <Image src={igSrc} />
        </Col>
        <Col span={6} className={styles.company}>
          <Image src={fbSrc} />
        </Col>
      </Row>
    </div>
  )
}
