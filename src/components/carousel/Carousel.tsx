import React from 'react'
import { Image, Carousel as AntCarousel } from 'antd'

import Carousel1 from '../../assets/images/carousel_1.jpg'
import Carousel2 from '../../assets/images/carousel_2.jpg'
import Carousel3 from '../../assets/images/carousel_3.jpg'

import styles from './Carousel.module.css'

export const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.carousel}>
      <Image src={Carousel1}></Image>
      <Image src={Carousel2}></Image>
      <Image src={Carousel3}></Image>
    </AntCarousel>
  )
}
