import React from "react"
import PropTypes from "prop-types"
import { Button, Nav, NavItem, NavLink, Navbar} from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Invitations from './pages/Invitations'
import Profile from './pages/Profile'


class UnauthenticatedApp extends React.Component {
  render(){
    return (
      <div>
        <h1>Welcome to F21 Website</h1>
      </div>
    );
  }
}

export default UnauthenticatedApp
