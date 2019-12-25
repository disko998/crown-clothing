import React from 'react'
import Lightbox from 'react-image-lightbox'

export const ImageLightbox = ({ image, onClose }) => (
    <Lightbox mainSrc={image} onCloseRequest={onClose} />
)
