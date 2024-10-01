import React from 'react'
import { Carousel } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";
import './Banner.css' // 추가된 CSS 파일 import

export default function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="banner-overlay">
                    <StaticImage 
                        src="../../images/banner.webp" 
                        alt="banner image"
                        className="d-block w-100 banner-img"
                        layout="fullWidth"
                        placeholder="blurred"
                    />                    
                    <div className="banner-text w-100">
                        SQURE FURNISYS
                        <div className="banner-subtext">"일하는 공간, 더 나은 내일을 위한 선택"</div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="banner-overlay">
                    <StaticImage 
                        src="../../images/banner1.webp" 
                        alt="banner image"
                        className="d-block w-100 banner-img"
                        layout="fullWidth"
                        placeholder="blurred"
                    />                    
                    <div className="banner-text w-100">
                        SQURE FURNISYS
                        <div className="banner-subtext">"오피스에 스타일과 편안함을 더하다."</div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="banner-overlay">
                    <StaticImage 
                        src="../../images/banner2.webp" 
                        alt="banner image"
                        className="d-block w-100 banner-img"
                        layout="fullWidth"
                        placeholder="blurred"
                    />                    
                    <div className="banner-text w-100">
                        SQURE FURNISYS
                        <div className="banner-subtext">"편안함과 효율성을 더한 오피스 가구 솔루션"</div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}