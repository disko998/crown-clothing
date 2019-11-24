import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css'
import { Homepage, ShopPage, SignInAndSignUp} from './pages'
import { Header } from './components'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

 render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.user ? <Redirect to='/' /> : <SignInAndSignUp />} />
        </Switch>
      </div>
  );
 }
}

const mapStateToProps = state => ({
  user: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
