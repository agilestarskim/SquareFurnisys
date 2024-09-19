import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../images/banner1.webp'
import banner2 from '../../images/banner2.webp'
import banner3 from '../../images/banner3.webp'
import banner4 from '../../videos/banner.mp4'
import './Banner.css' // 추가된 CSS 파일 import

export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <video className="d-block w-100 banner-video" autoPlay muted loop>
                    <source src={banner4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 banner-img" src={banner1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 banner-img" src={banner2} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 banner-img" src={banner3} alt="Second slide"/>
            </Carousel.Item>            
        </Carousel>
    )
}