import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CardImage from './CardImage.js'

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
    selection = moviePairs[e.target.getAttribute('id')]
    this.setState({selectedMovie:selection});
    this.props.choiceSubmitted(selection)
  }
  // defaultMovieImg(){
  //   const { selectedMovie } = this.state
  //   if (selectMovie.poster_path) == null
  //   this.setState({selectedMovie:https://png.pngtree.com/svg/20160809/question_mark_default_334217.png})
  // }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
        const { dropdownOpen, selectedMovie } = this.state
        const { moviePairs } = this.props
        return(
          <div className = "choice-card">
              <Card>
                <CardImage selectedMovie= {selectedMovie} />
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
