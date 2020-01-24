import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { CollectionPreview } from "../index";
import { selectCollectionsInArray } from "../../redux/shop/shop.selectors";

export const CollectionsOverviewComponent = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsInArray
});

export const CollectionsOverview = connect(mapStateToProps)(
  CollectionsOverviewComponent
);
