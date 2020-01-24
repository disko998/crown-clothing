import React from 'react'
import { connect } from 'react-redux'

import { ImageLightbox } from '../image-lightbox'
import { addItemToCart } from '../../redux/cart/cart.action'
import {
    AddToCartButton,
    CollectionItemContainer,
    CollectionFooter,
    Name,
    Price,
    CartImage,
} from './collection-item.styles.js'

class CollectionItemComponent extends React.Component {
    state = {
        openModal: false,
    }

    render() {
        const { addToCart, item } = this.props
        const { name, price, imageUrl } = item

        return (
            <CollectionItemContainer>
                <CartImage style={{ backgroundImage: `url(${imageUrl})` }}>
                    <AddToCartButton inverted onClick={() => addToCart(item)}>
                        Add to cart
                    </AddToCartButton>
                </CartImage>
                <CollectionFooter>
                    <Name>{name}</Name>
                    <Price>{price} RSD</Price>
                </CollectionFooter>
                {this.state.openModal && (
                    <ImageLightbox
                        image={imageUrl}
                        onClose={() => this.setState({ openModal: false })}
                    />
                )}
            </CollectionItemContainer>
        )
    }
}

const dispatchToProps = dispatch => ({
    addToCart: item => dispatch(addItemToCart(item)),
})

export const CollectionItem = connect(
    null,
    dispatchToProps
)(CollectionItemComponent)
