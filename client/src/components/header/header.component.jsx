import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { CartIcon, CartDropdown } from '../index'
import { toggleDropdown } from '../../redux/cart/cart.action'
import { signOutStart } from '../../redux/user/user.action'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { HeaderContainer, OptionsContainer, OptionLink, LogoContainer } from './header.styles.js'

const HeaderComponent = ({ user, cartHidden, toggleDropdown, signOut }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/'>Home</OptionLink>
                <OptionLink to='/shop'>Shop</OptionLink>
                {user ? (
                    <OptionLink to='' as='div' onClick={signOut}>
                        Sign out
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>Sign in</OptionLink>
                )}
                <CartIcon onClick={() => toggleDropdown()} />
            </OptionsContainer>
            {cartHidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    cartHidden: selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
    toggleDropdown: () => dispatch(toggleDropdown()),
    signOut: () => dispatch(signOutStart()),
})

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
