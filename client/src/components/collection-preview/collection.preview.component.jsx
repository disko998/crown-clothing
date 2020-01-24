import React from "react";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";
import { CollectionItem } from "../index";

export const CollectionPreviewComponent = ({
  title,
  items,
  routeName,
  history,
  match
}) => {
  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export const CollectionPreview = withRouter(CollectionPreviewComponent);
