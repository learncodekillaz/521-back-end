import React from "react"
import PropTypes from "prop-types"
import { Button, Nav, NavItem, NavLink, Navbar } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Invitations from './pages/Invitations'
import Profile from './pages/Profile'
import ChoiceCard from './pages/ChoiceCard'

class Authenticated extends React.Component {
  render(){
    return (
      <Router>
      <div>
          <Nav>
              <Button outline color='primary'>LOGO</Button>
              <Button outline color='success'>Invitations</Button>
              <Button outline color='danger'>Profile</Button>

          </Nav>
          <Route path="/" exact component={Home} />
          <Route path="/events" components={Events} />
          <Route path="/invitations" components={Invitations} />
          <ChoiceCard />
      </div>
      </Router>
    );
  }
}

export default Authenticated
