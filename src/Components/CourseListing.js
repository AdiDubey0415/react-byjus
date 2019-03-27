import React ,{ Component } from 'react';
import CourseCard from './CourseCard';

export default class CourseList extends Component{
    render(){
        return(
            <div className="container">
                <div className="row d-flex flex-row-reverse align-items-center">
                    <div className="my-4">
                        <span className="h6">Total Number of courses: </span>
                        <span>12</span>
                    </div>
                </div>
                <div className="row">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
            
        );
    }
}