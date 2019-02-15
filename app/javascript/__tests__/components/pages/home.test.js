import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from '../../../pages/Home';
Enzyme.configure({ adapter: new Adapter() })

// this test will fake data

it('it renders Home', () => {
  fetch.mockResponseOnce(JSON.stringify( [{
    add_info_here: "string"
  }
] ))
const one = shallow(<HOME_COMPONENT />)
expect('it renders').toBe(true)
})
