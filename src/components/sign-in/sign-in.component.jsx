import React from 'react'

import './sign-in.styles.scss'
import {FormInput, CustomButton} from '../index'

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
                    <CustomButton type='submit'>
                        Sign in
                    </CustomButton>
                </form>
            </div>
        )
    }

    handleChange = (e) => {
        const {value, name} = e.target

        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({email: '', password: ''})
    }
}

