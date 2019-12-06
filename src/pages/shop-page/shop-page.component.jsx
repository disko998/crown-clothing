import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { CollectionsOverview, WithSpinner } from "../../components";
import { CollectionPage } from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(
  CollectionsOverview,
  "overview"
);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage, "page");
console.log("Shop", CollectionPage);

export class ShopPageComponent extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const dispatchToProps = dispatch => ({
  updateCollections: payload => dispatch(updateCollections(payload))
});

export const ShopPage = connect(null, dispatchToProps)(ShopPageComponent);
