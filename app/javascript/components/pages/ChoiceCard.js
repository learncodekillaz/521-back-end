import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

class ChoiceCard extends Component {
    render() {
      return(
        <div>
          <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80" alt="Card image cap" />
            <CardBody>
              <CardTitle>First Movie Selection</CardTitle>
              <CardSubtitle>Card Subtitle</CardSubtitle>
              <CardText>Card Text</CardText>
              <Button>Submit</Button>
            </CardBody>
          </Card>
        </div>
      )
    }
}

export default ChoiceCard
