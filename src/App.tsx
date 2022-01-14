import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  PageNotFound,
  SearchPage,
  ShoppingCartPage,
} from './pages'
import { useSelector } from './redux/hooks'
import { getShoppingCart } from './redux/shoppingCart/slice'

import styles from './App.module.css'

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/signIn' }} />
    )
  }
  return <Route render={routeComponent} {...rest} />
}

const App = () => {
  const jwt = useSelector((S) => S.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [jwt])

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCartPage}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
