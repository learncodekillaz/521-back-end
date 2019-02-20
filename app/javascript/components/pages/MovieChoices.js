// import React from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//
//  export default class MovieChoices extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false,
//
//     };
//   }
//   selectMovie = (e) => {
//     console.log("Success", e.target.innerText)
//     this.setState({
//       value: e.target.innerText
//     });
//   }
//
//   toggle() {
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   }
//
//   render() {
//     const { moviePairs, dropdownOpen } = this.state
//     console.log("moviePairs",moviePairs);
//     return (
//       <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
//         <DropdownToggle caret>
//           Movie Choices
//         </DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem header>Movies</DropdownItem>
//           {moviePairs.map((movie, index) => {
//             return(
//               <DropdownItem key={index}
//                 onClick={this.selectMovie}>
//                 {movie.title}
//               </DropdownItem>
//
//             )
//           })}
//           </DropdownMenu>
//
//       </Dropdown>
//     );
//   }
// }
