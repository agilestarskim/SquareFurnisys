import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';
import "./CardView.css"; // CSS 파일을 임포트합니다.

const CardView = ({ image, title, description }) => {
  return (
    <div className="custom-card">
      <GatsbyImage
        image={image}
        alt={title}
        className="card-img"
      />
      <div className="card-body">
        <p className="card-title text-left">{title}</p>
        <p className="card-text text-left text-muted">{description}</p>
      </div>
    </div>
  );
};

CardView.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardView;