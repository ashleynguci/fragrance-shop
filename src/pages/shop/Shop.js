import React, { useState } from "react";
import { SHOP_DATA } from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
export default function Shop(props) {
  const [
    collections,
    setCollections
  ] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(
        ({
          id,
          ...otherCollectionProps
        }) => (
            <PreviewCollection
              key={id}
              {...otherCollectionProps}
            />
          )
      )}
    </div>
  );
}
