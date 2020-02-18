import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css'
import { Homepage, ShopPage, SignInAndSignUp, CheckoutPage } from './pages'
import { Header } from './components'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.action'

const App = ({ user, checkUserSession }) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div className='main-container'>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={ShopPage} />
                <Route
                    exact
                    path='/signin'
                    render={() => (user ? <Redirect to='/shop' /> : <SignInAndSignUp />)}
                />
                <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
