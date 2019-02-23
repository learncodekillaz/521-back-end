import React, { Component } from 'react'
import { Button } from 'reactstrap'
import ChoicesTable from './ChoicesTable'
import { Parallax, Background } from 'react-parallax';

class Home extends Component {
    render() {
      return(
        <div className = "authenticated-header">
          <Parallax
          bgImage={require('../../images/movie.jpeg')}
          bgImageAlt="the dog"
          // strength={-200}
          >
        <div className="flex-container">

          <h1>Welcome to 521 App</h1>
        <div>
          <ChoicesTable />
        </div>
          </div>
          <div style={{ height: '400px' }} />
          </Parallax>
        </div>
      )
    }
}

export default Home
