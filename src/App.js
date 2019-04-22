import React, { Component } from 'react'
import AppContainer from './containers/AppContainer'
import WrappedNormalLoginForm from './containers/LoginContainer'
export default class App extends Component {
  render() {
    return (
      <div>
        <WrappedNormalLoginForm/>
      </div>
    )
  }
}
