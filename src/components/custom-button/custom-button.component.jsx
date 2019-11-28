import React from 'react'

import './custom-button.styles.scss'

export const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    const googleSignIn = isGoogleSignIn ? 'google-sign-in' : ''
    const invertedClass = inverted ? 'inverted' : ''

    return (
        <button className={`${googleSignIn} ${invertedClass} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
