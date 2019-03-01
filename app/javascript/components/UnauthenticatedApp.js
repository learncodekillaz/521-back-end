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
    const insideStyles = {
      background: "rgba(255,255,255,.9)",
      padding: 40,
      width:"50%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "black",
    };
    return (
      <div>
        <section>
          <div
           style={insideStyles}
          >
            <p style={{fontWeight: "bold", fontSize: "35px", textShadow: "2px 2px 4px grey"}}>Movie Choices Made Simple</p>
              <Button className="bttn" outline href="/users/sign_up">
              Register
            </Button>
          </div>
        </section>

        <section>
          <div style={{
            padding: 40,
            width:"50%",
            background: "rgba(255,255,255,.9)",
            position: "absolute",
            top: "150%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            color: "black",
          }}>
            <p style={{fontWeight: "bold", fontSize: "35px", textShadow: "2px 2px 4px grey"}}>Already a User?</p>
            <Button className="bttn" color="secondary" outline href="/users/sign_in">Log-In
          </Button>

          </div>
        </section>
      </div>
    );
  }
}

export default UnauthenticatedApp
