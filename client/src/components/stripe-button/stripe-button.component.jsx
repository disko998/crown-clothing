import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_ZrJ0MISNPDO26oD2A5Gadkfj00nBuLNQTt'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'POST',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then(response => {
                alert('Payment successful')
            })
            .catch(error => {
                console.log('Payment failed', error)
                alert(
                    'There was a issue with your payment. Please sure you provide valid credit card',
                )
            })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
