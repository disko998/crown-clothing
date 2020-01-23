import React, { useState } from 'react'
import { connect } from 'react-redux'

import './sign-up.styles.scss'
import { FormInput, CustomButton } from '../index'
import { signUpStart } from '../../redux/user/user.action'

export const SignUpComponent = ({ signUpWithCredentials }) => {
    const [signUpCredentials, setSignUpCredentials] = useState({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '',
    })
    const { displayName, email, password, confirmPassword } = signUpCredentials

    const handleChange = e => {
        const { value, name } = e.target

        setSignUpCredentials({ ...signUpCredentials, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('Password do not match')
            return
        }

        signUpWithCredentials(email, password, displayName)

        setSignUpCredentials({
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
        })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with you email or password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpWithCredentials: (email, password, displayName) =>
        dispatch(signUpStart(email, password, displayName)),
})

export const SignUp = connect(null, mapDispatchToProps)(SignUpComponent)
