import React, { useState } from "react";
import FragranceItem from "../fragrance-item/FragranceItem";
import "./directory.styles.scss";

export default function Directory() {
  const [
    sections,
    setSections
  ] = useState([
    {
      id: 1,
      title: "bestsellers",
      imageUrl: require("../../image/bestsellers.jpg"),
      linkUrl: ""
    },
    {
      id: 2,
      title: "luxury",
      imageUrl: require("../../image/luxury.jpg"),
      linkUrl: ""
    },
    {
      id: 3,
      title: "budget",
      imageUrl: require("../../image/budget.jpg"),
      linkUrl: ""
    },
    {
      id: 4,
      title: "womens",
      imageUrl: require("../../image/womens.jpg"),
      size: "large",
      linkUrl: ""
    },
    {
      id: 5,
      title: "mens",
      imageUrl: require("../../image/mens.jpg"),
      size: "large",
      linkUrl: ""
    }
  ]);
  return (
    <div className="directory-menu">
      {sections.map(
        ({
          id,
          ...otherSectionsProps
        }) => (
          <FragranceItem
            key={id}
            {...otherSectionsProps}
          />
        )
      )}
    </div>
  );
}
