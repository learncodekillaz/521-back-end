import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

 export default class UserDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      selectedUser: {}

    };
  }
  selectUser = (e) => {
    const {selectedUser} = this.state
    const { users } = this.props
    let selection = ""
    selection = users[e.target.getAttribute('id')]
    this.setState({selectedUser:selection});
    this.props.selectUser(selection)
  }


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { dropdownOpen } = this.state
    const { users } = this.props

    return (
      <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Invite a Friend
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Users</DropdownItem>
          {users.map((user, index) => {
            return(
              <DropdownItem key={index}
                onClick={this.selectUser}>
                {user.first_name}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
