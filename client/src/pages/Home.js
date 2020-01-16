import React, { Component } from 'react';
import './Home.css'
// import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <img src = "./images/name-logo.png" alt = "logo"/>
{/*       Link to Examplelink.js using React-Router-Dom
      <Link to={'./Examplelink'}>
        <button variant="raised">
            My List
        </button>
      </Link> */}
    </div>
    );
  }
}
export default Home;