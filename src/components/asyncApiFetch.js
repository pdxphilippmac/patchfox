import React from "react";
import axios from "axios";
export default class App extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(data => this.setState({ users: data.data.data }))
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  render() {
    return (
      <div>
        {this.stae.users.length === 0 ? (
          <div>Loading...</div>
        ) : (
          this.state.users.map((e, i) => {
            return <div key={i}>{e.first_name}</div>;
          })
        )}
      </div>
    );
  }
}
