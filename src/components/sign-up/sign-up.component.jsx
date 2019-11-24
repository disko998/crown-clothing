import React from 'react'

import './sign-up.styles.scss'
import {FormInput, CustomButton} from '../index'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

export class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        confirmPassword: '',
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state

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

    handleChange = (e) => {
        const {value, name} = e.target

        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert('Password don\'t match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                email: '',
                password: '',
                displayName: '',
                confirmPassword: '',
            })
        } catch (error) {
            console.error(error)
        }
    }
}

