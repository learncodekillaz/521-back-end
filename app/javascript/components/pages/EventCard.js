import React, {Component} from 'react'
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap'


class EventCard extends Component {
  constructor(props){
    super(props)
  }


  render(){
    const {choice} = this.props
    console.log("Choices", choice)

    return(
      <div className='choice-card'>
        <Card>
          <CardBody>
            <CardImg className="card-image" src={`https://image.tmdb.org/t/p/w200${choice.url}`} alt="Card image cap" />
            <CardTitle>{choice.choice_name}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EventCard
