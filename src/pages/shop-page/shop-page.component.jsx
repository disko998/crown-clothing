import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {CollectionPreview} from '../../components'
import {selectCollections} from '../../redux/shop/shop.selectors'

const ShopPageComponent = ({collections}) => {
    return (
        <div className='shop-page'>
            {collections.map( ({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
                ) 
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export const ShopPage = connect(mapStateToProps)(ShopPageComponent)

