import React from 'react'
import { connect } from 'react-redux'

import './sign-in.styles.scss'
import { FormInput, CustomButton } from '../index'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'

export class SignInComponent extends React.Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        const { signInWithGoogle } = this.props

        return (
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Email'
                        name='email'
                        type='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        label='Password'
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
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

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { signInWithEmailAndPassword } = this.props
        const { email, password } = this.state

        signInWithEmailAndPassword(email, password)

        this.setState({ email: '', password: '' })
    }
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmailAndPassword: (email, password) => dispatch(emailSignInStart(email, password)),
})

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent)
