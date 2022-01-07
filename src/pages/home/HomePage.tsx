import React from 'react'
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  CollaborateCompany,
} from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
import { withTranslation, WithTranslation } from 'react-i18next'
import axios from 'axios'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'

import styles from './HomePage.module.css'

interface State {
  loading: boolean
  error: string | null
  productList: any[]
}

class HomePageComponent extends React.Component<WithTranslation, State> {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      productList: [],
    }
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        ` http://192.168.120.194:7300/mock/61d79dc72c7cf895bc0c49e1/productCollections`
      )
      this.setState({
        loading: false,
        error: null,
        productList: data.data,
      })
    } catch (error: any) {
      this.setState({
        error: error.message,
        loading: false,
      })
    }
  }

  render() {
    const { t } = this.props
    const { productList, loading, error } = this.state

    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          }}
        />
      )
    }

    if (error) {
      return <div>网站出错：{error}</div>
    }

    return (
      <div className={styles.App}>
        <Header />
        {/* 页面内容content */}
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t('home_page.hot_recommended')}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList[0].touristRoutes}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t('home_page.new_arrival')}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t('home_page.domestic_travel')}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          ></ProductCollection>
          <CollaborateCompany />
        </div>
        <Footer />
      </div>
    )
  }
}

export const HomePage = withTranslation()(HomePageComponent)
