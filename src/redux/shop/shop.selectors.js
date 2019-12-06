import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollectionsInArray = createSelector(
  selectCollections,
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : null
);

export const selectCollection = collectionParam =>
  createSelector(selectCollections, collections =>
    collections ? collections[collectionParam] : null
  );
