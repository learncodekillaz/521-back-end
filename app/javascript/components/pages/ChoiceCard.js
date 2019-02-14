import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import DropDown from './DropDown'
class ChoiceCard extends Component {
  constructor(props) {
    super(props)
    // this.toggle = this.toggle.bind(this)
    this.state = {
      moviePairs:
        {
          title: "Pulp Fiction",
          genre: "Drama",
          description: "hello, having fun"
        }
        // {
        //   title: "Happy Gilmore",
        //   genre: "Comedy",
        //   description: "Golfer"
        // },
        // {
        //   title: "The Matrix",
        //   genre: "Action",
        //   description: "crazy stuff"
        // },
        // {
        //   title: "The Departed",
        //   genre: "Drama",
        //   description: "cool movie"
        // },
        // {
        //   title: "Fast & Furious",
        //   genre: "Action",
        //   description: "fast cars"
        // }
      // ]
    }
  }


  render() {
      const {moviePairs} = this.state
      return(
        <div>
            <Card>
              <CardImg top width="100px" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80" alt="Card image cap" />
              <CardBody>
                <CardTitle>{moviePairs.title}</CardTitle>
                <CardSubtitle>{moviePairs.genre}</CardSubtitle>
                <CardText>{moviePairs.description}</CardText>
                <Button>Submit</Button>
              </CardBody>
              <DropDown />
            </Card>
        </div>
      )
    }
}

export default ChoiceCard
