import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import CourseList from './Components/CourseListing';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <CourseList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
