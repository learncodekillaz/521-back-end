import React, { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileAttributes: {
        email: 'test@test.com',
        username: 'testjoe',
        first_name: 'John',
        last_name: 'Doe',
        nickname: 'Jonny',
        gender: 'M',
        phone: '123-345-6657',
        address_1: '123 never',
        address_2: 'apt #4',
        city: 'San Diego',
        state: 'CA',
        country: 'US',
        zipcode: '92101',
        birthday: '02/14/2008',
        password: '123456'
    }
  }
}
    render() {
      return(
        <form>
          <h1>Profile Page</h1>
        </form>
      )
    }
}

export default Profile
