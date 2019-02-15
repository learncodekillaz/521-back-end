import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class ChoiceCard extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedMovie:{},
    }
  }
  selectMovie = (e) => {
    const {selectedMovie} = this.state
    const {moviePairs} = this.props
    let selection =""
    // console.log("Success", e.target.innerText)
    // console.log(e.target.getAttribute('id'));
    selection = moviePairs[e.target.getAttribute('id')]
    this.setState({selectedMovie:selection});
    // console.log("moviePairs[]",selection);
    // console.log(selectedMovie);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
        const {dropdownOpen, selectedMovie} = this.state
        const {moviePairs} = this.props
        // console.log(this.props.moviePairs);
        return(
          <div className = "choice-card">
              <Card>
                <CardImg className="card-image" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{selectedMovie.title}</CardTitle>
                  <CardSubtitle>{selectedMovie.genre}</CardSubtitle>
                  <CardText>{selectedMovie.description}</CardText>
                  <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Movie Choices
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Movies</DropdownItem>
                      {moviePairs.map((movie, index) => {
                        return(
                          <DropdownItem key={index} id={index}
                            onClick={this.selectMovie}>
                            {movie.title}
                          </DropdownItem>
                        )
                      })}
                      </DropdownMenu>
                  </Dropdown>
                </CardBody>
              </Card>
          </div>
        )
  }
}

export default ChoiceCard
