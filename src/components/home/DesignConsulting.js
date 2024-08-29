import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "./DesignConsulting.css";

const DesignConsulting = () => {
    const data = useStaticQuery(graphql`
        query {
          designConsultingImage: file(relativePath: { eq: "design-consulting.png" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `);

    return (
        <div>
            <p className="text-center fs-1">
                SQUARE <span className="highlight">DESIGN</span> CONSULTING
            </p>
            <p className="text-center fs-4 text-muted">효율적인 오피스 공간을 위한 맞춤형 
                 <span style={{ color: "black", fontWeight: "bold"}}> Planning Ideas</span> 제공 
            </p>
            <Img 
                fluid={data.designConsultingImage.childImageSharp.fluid} 
                alt="Design Consulting"
                className="glass"                
            />
            <div className="text-center">
                <button className="learn-more-button">더 알아보기</button>
            </div>
        </div>
    );
}

export default DesignConsulting;