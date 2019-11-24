import React from 'react'

import './sign-in.styles.scss'
import {FormInput, CustomButton} from '../index'
import {signInWithGoogle, signInWithEmailAndPassword} from '../../firebase/firebase.utils'

export class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    render() {
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
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        const {value, name} = e.target

        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {email, password} =  this.state

        try {
            await signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error)
            alert(error.message)
        }

    }
}

