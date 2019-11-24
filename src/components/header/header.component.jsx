import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

export const Header = ({user}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    Shop
                </Link>
                <Link to='/contact' className='option'>
                    Contact
                </Link>
                {
                    user ?
                    <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                    : 
                    <Link to='/signin' className='option'>
                        Sign in
                    </Link>
                }
            </div>
        </div>
    )
}

