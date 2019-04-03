import React, { Component } from "react";
import Nav from "../../components/Nav";
import API from "../../utils/API";
import "./Home.css";

class Home extends Component {

  state = {
    allData: [],
    name: "",
  
  };


  componentDidMount = () => {
    // this.allNames();
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
      ? event.target.checked
      : event.target.value
    })
  }


  submit = (event) => {
    event.preventDefault();
    console.log("submitting data")
    console.log(this.state.name)
    API.addName({name: this.state.name})
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  allNames = () => {

    API.getNames()
      .then(res => {
        this.setState({
          allData: res.data
        })
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Nav />
        <br />
        <div className="admin-header">
          <h1 className="home-h1">Welcome to MERN Template</h1>
        </div>
        <form>
          <div> enter a name</div>
            <input 
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              />
              <br/>
              <button
                onClick={this.submit}
                >Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;
