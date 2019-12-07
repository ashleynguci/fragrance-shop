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
      imageUrl:
        "https://thechrisellefactor.com/wp-content/uploads/2015/04/chriselle_lim_spring_scents_5_favorites_kate_spade_jo_malone-1-2.jpg",
      linkUrl: ""
    },
    {
      id: 2,
      title: "luxury",
      imageUrl:
        "https://uploads-ssl.webflow.com/5c3b7a85e76e080664f29296/5ccf73da0b9ef2a6a9f261ae_main.jpg",
      linkUrl: ""
    },
    {
      id: 3,
      title: "budget",
      imageUrl:
        "https://www.fragranceadvisors.com/wp-content/uploads/2019/06/bottle-2812214_1280-696x361.jpg",
      linkUrl: ""
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://miro.medium.com/max/1000/1*vH1y9wAb8cJvqswK1aoKWw.jpeg",
      size: "large",
      linkUrl: ""
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://www.dior.com/couture/var/dior/storage/images/17236182/9-eng-US/pcd-cover-sauvage-europe-us8_1440_1200.jpg",
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
