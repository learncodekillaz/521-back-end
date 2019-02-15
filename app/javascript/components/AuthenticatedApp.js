import React from "react"
import PropTypes from "prop-types"
import { Button, Nav, NavItem, NavLink, Navbar } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Invitations from './pages/Invitations'
import Profile from './pages/Profile'
import ChoiceCard from './pages/ChoiceCard'
import Events from './pages/Events'
import ChoicesTable from './pages/ChoicesTable'


class AuthenticatedApp extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <Button color="danger">
            <NavLink href="/member/home">Logo</NavLink>
          </Button>{' '}
          <Button color="red">
            <NavLink href="/users/sign_out">Sign Out</NavLink>
          </Button>{' '}
          <Button color="red">
            <NavLink href="/events">Create Invitation</NavLink>
          </Button>{' '}
          <Button color="red">
            <NavLink href="/invitations">Invitations</NavLink>
          </Button>{' '}
          <Button color="red">
            <NavLink href="/profile">Profile</NavLink>
          </Button>
          <Switch>
            <Route path="/choicecard" component={ChoiceCard} />
            <Route path="/choicestable" component={ChoicesTable} />
            <Route path="/member/home" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/invitations" component={Invitations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
