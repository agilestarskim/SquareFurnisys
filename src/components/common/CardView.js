import React from "react";
import PropTypes from 'prop-types';
import "./CardView.css"; // CSS 파일을 임포트합니다.
import { GatsbyImage } from "gatsby-plugin-image"; // GatsbyImage를 임포트합니다.

const CardView = ({ image, title, description }) => {
  return (
    <div className="custom-card">
      {image ? 
        (<GatsbyImage image={image} alt={title} className="card-img"/>) : 
        (<div className="placeholder-img"></div>)
      }
      <div className="card-body">
        <p className="card-title text-left">{title}</p>
        <p className="card-text text-left text-muted">{description}</p>
      </div>
    </div>
  );
};

CardView.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardView;