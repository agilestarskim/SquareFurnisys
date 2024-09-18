import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../images/banner.jpg'
import banner2 from '../../images/banner1.jpg'
// import banner3 from '../../images/banner3.png'
import './Banner.css' // 추가된 CSS 파일 import

export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 banner-img" src={banner1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 banner-img" src={banner2} alt="Second slide"/>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img className="d-block w-100 banner-img" src={banner3} alt="Third slide"/>
            </Carousel.Item> */}
        </Carousel>
    )
}