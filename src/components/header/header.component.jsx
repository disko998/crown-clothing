import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

export const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    Shop
                </Link>
                <Link to='/shop' className='option'>
                    Contact
                </Link>
            </div>
        </div>
    )
}

