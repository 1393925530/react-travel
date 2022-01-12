import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  PageNotFound,
  SearchPage,
} from './pages'

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
