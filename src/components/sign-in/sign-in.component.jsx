import React, { useState } from 'react'
import { connect } from 'react-redux'

import './sign-in.styles.scss'
import { FormInput, CustomButton } from '../index'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'

export const SignInComponent = ({ signInWithGoogle, signInWithEmailAndPassword }) => {
    const [signInCredentials, setSignInCredentials] = useState({
        email: '',
        password: '',
    })
    const { email, password } = signInCredentials

    const handleChange = e => {
        const { value, name } = e.target

        setSignInCredentials({ ...signInCredentials, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
        setSignInCredentials({ email: '', password: '' })
    }

    return (
        <div className='sign-in'>
            <h2>I already have account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={email}
                    required
                />
                <FormInput
                    label='Password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={password}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmailAndPassword: (email, password) => dispatch(emailSignInStart(email, password)),
})

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent)
