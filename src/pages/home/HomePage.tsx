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
import { connect, MapStateToProps } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  fetchRecomendProductsStartActionCreator,
  fetchRecomendProductsSuccessActionCreator,
  fetchRecomendProductsFailActionCreator,
} from '../../redux/recommendProducts/recommendProductsActions'

import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStart: () => {
      dispatch(fetchRecomendProductsStartActionCreator())
    },
    fetchSuccess: (data) => {
      dispatch(fetchRecomendProductsSuccessActionCreator(data))
    },
    fetchFail: (error) => {
      dispatch(fetchRecomendProductsFailActionCreator(error))
    },
  }
}

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends React.Component<PropsType> {
  async componentDidMount() {
    this.props.fetchStart()
    try {
      const { data } = await axios.get(
        ` http://192.168.120.194:7300/mock/61d79dc72c7cf895bc0c49e1/productCollections`
      )
      this.props.fetchSuccess(data.data)
    } catch (error: any) {
      this.props.fetchFail(error.message)
    }
  }

  render() {
    const { t } = this.props
    const { productList, loading, error } = this.props

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

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent))
