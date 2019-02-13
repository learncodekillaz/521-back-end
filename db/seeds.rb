# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

users =User.create([
  {
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
  },
  {
    email: 'janedoe@test.com',
    username: 'testjane',
    first_name: 'Jane',
    last_name: 'Doe',
    nickname: '',
    gender: 'F',
    phone: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    zipcode: '92101',
    birthday: '',
    password: '123456'
  },
  {
    email: 'wonder@gmail.com',
    username: '',
    first_name: 'Wonder',
    last_name: 'Land',
    nickname: '',
    gender: '',
    phone: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    birthday: '',
    password: '123456'
  },
  {
    email: 'kebin@gmail.com',
    username: 'kebin78',
    first_name: 'Kevin',
    last_name: 'Dom',
    nickname: 'Kebin',
    gender: 'M',
    phone: '',
    address_1: '',
    address_2: '',
    city: 'San Diego',
    state: 'CA',
    country: 'US',
    zipcode: '92101',
    birthday: '04/15/2001',
    password: '123456'
  },
  {
    email: 'justin@cat.com',
    username: 'justin',
    first_name: 'Justin',
    last_name: 'Hitch',
    nickname: 'Neal',
    gender: 'F',
    phone: '567-345-2345',
    address_1: '345 torrent',
    address_2: '',
    city: 'San Marcos',
    state: 'CA',
    country: 'US',
    zipcode: '92345',
    birthday: '03/11/1998',
    password: '123456'
  }])

  events = Event.create([
    {
      event_name: 'John & Jane\'s Movie',
      invitee: users.second,
      five_choices: true,
      two_choices: true,
      final_choice: true,
      current_stage: 'final_choice',
      event_attend_inviter: 'Yes',
      event_attend_invitee: 'Yes',
      event_rating_inviter: 5,
      event_rating_invitee: 3,
      event_type: 'movie',
      cancel_type: '',
      user: users.first
    },
    {
      event_name: 'John & Wonder\'s Movie',
      invitee: users.third,
      five_choices: true,
      two_choices: true,
      final_choice: '',
      current_stage: 'two_choices',
      event_attend_inviter: '',
      event_attend_invitee: '',
      event_rating_inviter: '',
      event_rating_invitee: '',
      event_type: 'movie',
      cancel_type: '',
      user: users.first
    }
    ])

    choices = Choice.create([
      {
        event: events.first,
        choice_name: 'Jaws',
        status: '2'
      },
      {
        event: events.first,
        choice_name: 'Happy Gilmore',
        status: '1'
      },
      {
        event: events.first,
        choice_name: 'The Martian',
        status: '3'
      },
      {
        event: events.first,
        choice_name: 'Titanic',
        status: '1'
      },
      {
        event: events.first,
        choice_name: 'Indiana Jones',
        status: '1'
      },
      {
        event: events.last,
        choice_name: 'Terminator',
        status: '1'
      },
      {
        event: events.last,
        choice_name: 'The Departed',
        status: '2'
      },
      {
        event: events.last,
        choice_name: 'Star Wars',
        status: '1'
      },
      {
        event: events.last,
        choice_name: 'Casino',
        status: '2'
      },
      {
        event: events.last,
        choice_name: 'Pulp Fiction',
        status: '1'
      }
    ])
