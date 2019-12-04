import React from "react";
import { Route } from "react-router-dom";

import { CollectionsOverview } from "../../components";
import { CollectionPage } from "../index";

export const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};
