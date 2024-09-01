import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import "./DesignConsulting.css";

const DesignConsulting = () => {
    const handleNavigation = () => {
        navigate("/Design");
    };

    return (
        <div>
            <p className="text-center fs-1">
                SQUARE <span className="highlight">DESIGN</span> CONSULTING
            </p>
            <p className="text-center fs-4 text-muted">효율적인 오피스 공간을 위한 맞춤형 
                 <span style={{ color: "black", fontWeight: "bold"}}> Planning Ideas</span> 제공 
            </p>
            <div onClick={handleNavigation} style={{ cursor: "pointer" }}>
                <StaticImage 
                    src="../../images/design-consulting.png" 
                    alt="Design Consulting"
                    className="glass"
                    layout="fullWidth"
                    placeholder="blurred"
                />
            </div>
            <div className="text-center">
                <button 
                className="learn-more-button" 
                onClick={handleNavigation}
                >더 알아보기
                </button>
            </div>
        </div>
    );
}

export default DesignConsulting;