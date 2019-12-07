import React from "react";
import { withRouter } from "react-router-dom";
import "./fragrance-item.styles.scss";
const FragranceItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}) => {
  return (
    <div
      className={`${size} fragrance-item`}
      onClick={() =>
        history.push(
          `${match.url}${linkUrl}`
        )
      }
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">
          {title.toUpperCase()}
        </h1>
        <span className="subtitle">
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

export default withRouter(
  FragranceItem
);
