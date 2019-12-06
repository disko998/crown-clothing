import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionsOverview, WithSpinner } from "../../components";
import { CollectionPage } from "../collection/collection.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPageComponent extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
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
              isLoading={this.props.isLoading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsPageWithSpinner
              isLoading={this.props.isLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const dispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export const ShopPage = connect(
  mapStateToProps,
  dispatchToProps
)(ShopPageComponent);
