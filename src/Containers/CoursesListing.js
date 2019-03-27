import React ,{ Component } from 'react';
import CourseCard from '../Components/CourseCard';

import { connect } from "react-redux";

class CoursesList extends Component{
    renderList(){
        return this.props.courses.map( (course) => {
            return <CourseCard key={course.CourseId} course={course}/>
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row d-flex flex-row-reverse align-items-center">
                    <div className="my-4">
                        <span className="h6">Total Number of courses : </span>
                        <span></span>
                    </div>
                </div>
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
      courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesList)