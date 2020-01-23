import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { CollectionsOverview, WithSpinner } from '../../components'
import { CollectionPage } from '../collection/collection.component'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import { selectIsFetching } from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionPage)

export const ShopPageComponent = ({ isLoading, fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Route
                exact
                path={`${match.path}`}
                render={props => (
                    <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
                )}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props => <CollectionsPageWithSpinner isLoading={isLoading} {...props} />}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching,
})

const dispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export const ShopPage = connect(mapStateToProps, dispatchToProps)(ShopPageComponent)
