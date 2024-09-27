import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../images/banner.webp'
import bannerVideo from '../../videos/banner.mp4'
import './Banner.css' // 추가된 CSS 파일 import

export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="banner-overlay">
                    <img className="d-block w-100 banner-img" src={banner1} alt="First slide"/>
                    <div className="banner-text w-100">
                        SQURE FURNISYS
                        <div className="banner-subtext">"일하는 공간, 더 나은 내일을 위한 선택"</div>
                    </div>
                </div>
            </Carousel.Item>
            {/* <Carousel.Item>
                <video className="d-block w-100 banner-cover-img" autoPlay muted loop>
                    <source src={bannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Carousel.Item>                  */}
        </Carousel>
    )
}