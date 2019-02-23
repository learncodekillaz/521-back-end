import React from "react"
import PropTypes from "prop-types"
import { Button, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import home_screen from '../images/home_screen.png'
import movie from '../images/movie.jpeg'
import { Parallax, Background } from 'react-parallax';

import Home from './pages/Home'
import Invitations from './pages/Invitations'
import Profile from './pages/Profile'


class UnauthenticatedApp extends React.Component {
  render(){
    return (
      <div>
      <Parallax
            bgImage={require('../images/movie.jpeg')}
            bgImageAlt="the dog"
            // strength={-200}
        >

        <h1 className = "unauthenticated-header">Welcome to F21 Website</h1>
        <h2 className = "unauthenticated-header">
          <a className = "unauthenticated-header" href="/users/sign_in">Sign In</a>
        </h2>
        <div style={{ height: '55vh' }} />
        </Parallax>
      </div>
    );
  }
}

export default UnauthenticatedApp
