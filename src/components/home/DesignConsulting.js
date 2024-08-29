import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./DesignConsulting.css";

const DesignConsulting = () => {

    return (
        <div>
            <p className="text-center fs-1">
                SQUARE <span className="highlight">DESIGN</span> CONSULTING
            </p>
            <p className="text-center fs-4 text-muted">효율적인 오피스 공간을 위한 맞춤형 
                 <span style={{ color: "black", fontWeight: "bold"}}> Planning Ideas</span> 제공 
            </p>
            <StaticImage 
                src="../../images/design-consulting.png" 
                alt="Design Consulting"
                className="glass"
                layout="fullWidth"
                placeholder="blurred"
            />
            <div className="text-center">
                <button className="learn-more-button">더 알아보기</button>
            </div>
        </div>
    );
}

export default DesignConsulting;