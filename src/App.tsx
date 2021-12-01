import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Result } from 'antd'
import { HomePage } from './pages'

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" render={() => <h1>登录</h1>} />
          <Route
            render={() => (
              <Result
                className={styles.result}
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
