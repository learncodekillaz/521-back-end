import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Userdropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { dropdownOpen } = this.state;
    const { users, inviter, invitee, selectUser } = this.props;

    // const userIndex = users.findIndex(
    //   e => e.id == (inviter[0].id == undefined ? 6 : inviter[0].id)
    // );

    console.log("users props: ", users);
    console.log("inviter props: ", inviter[0]);
    // console.log("userIndex props: ", userIndex);

    // users.splice(users.indexOf(inviter), 1);

    // console.log("users after props: ", users);
    // console.log('selectedUser', selectedUser);

    return (
      <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {invitee && invitee.first_name}
          {!invitee && "Select Friend"}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Users</DropdownItem>
          {users.map((user, index) => {
            return (
              <DropdownItem
                key={index}
                id={index}
                onClick={() => selectUser(user)}
              >
                {user.first_name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
