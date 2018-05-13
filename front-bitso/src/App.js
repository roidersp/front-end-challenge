import React, { Component } from 'react'
import logo from './logo.svg'
import './styles/App.less'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
