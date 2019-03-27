import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from "redux";


import CoursesList from './Containers/CoursesListing';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <CoursesList />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     state
//   }
// }

export default App;
