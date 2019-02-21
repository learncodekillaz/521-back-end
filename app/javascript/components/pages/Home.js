import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Event from './Event'

class Home extends Component {
    render() {
      return(
        <div>
        <h1>Welcome to 521 App</h1>
        <Event/>

        </div>
      )
    }
}

export default Home
