import React from 'react'
import { connect } from 'react-redux'

import './sign-up.styles.scss'
import { FormInput, CustomButton } from '../index'
import { signUpStart } from '../../redux/user/user.action'

export class SignUpComponent extends React.Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '',
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with you email or password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { signUpWithCredentials } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Password do not match')
            return
        }

        signUpWithCredentials(email, password, displayName)

        this.setState({
            email: '',
            password: '',
            displayName: '',
            confirmPassword: '',
        })
    }
}

const mapDispatchToProps = dispatch => ({
    signUpWithCredentials: (email, password, displayName) =>
        dispatch(signUpStart(email, password, displayName)),
})

export const SignUp = connect(null, mapDispatchToProps)(SignUpComponent)
