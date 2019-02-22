import React from "react"
import PropTypes from "prop-types"
import { Button, Nav, NavItem, NavLink, Navbar } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Invitations from './pages/Invitations'
import Profile from './pages/Profile'
import ChoiceCard from './pages/ChoiceCard'

import ChoicesTable from './pages/ChoicesTable'


class AuthenticatedApp extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/choicecard" component={ChoiceCard} />
            <Route path="/choicestable" component={ChoicesTable} />
            <Route path="/" exact component={Home} />
            <Route path="/invitations" component={Invitations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
