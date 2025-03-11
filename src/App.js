import React, { Component } from "react";

import UserProfile from "./components/UserProfile";
import "./App.css";

const intialUserDetails = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

class App extends Component {
  state = { searchInput: "", userDetails: intialUserDetails };

  onSearchUserInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  deleteUser = (uniqueNo) => {
    const { userDetails } = this.state;
    const filteredData = userDetails.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({ userDetails: filteredData });
  };

  render() {
    const { searchInput, userDetails } = this.state;
    const searchResults = userDetails.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div className="list-container">
        <h1>Users List</h1>
        <input
          type="search"
          placeholder="search name"
          onChange={this.onSearchUserInput}
          value={searchInput}
        />
        <ul>
          {searchResults.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
