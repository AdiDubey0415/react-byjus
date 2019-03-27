import React from 'react';

const CourseCard = (props) => {
    console.log(props.course)
    return (
        <div className="card col-md-4 m-3">
            <div className="card-body">
                <h5 className="card-title">{ props.course.CourseName}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item h6">
                    <span>Provider - </span>
                    <span>{ props.course.Provider }</span>
                </li>
                <li className="list-group-item h6">
                    <span>Universities - </span>
                    <span>{props.course.Universities.Institutions}</span>
                </li>
            </ul>
            <div className="card-body">
                <span className="h6">Next Session Date - </span>
                <span>{ props.course.NextSessionDate }</span>
            </div>
        </div>
    );
}

export default CourseCard;