import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader/root'

// Components

class App extends Component {
  render() {
    return(
      <Fragment>
        cool
        <h1>Hello webpack SSR React</h1>
        <h2>amazing</h2>
      </Fragment>
    )
  }
}

export default hot(App)
