import React from 'react';

const CourseCard = (props) => {
    return (
        <div className="card col-md-4 m-3">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item h6">Cras justo odio</li>
                <li className="list-group-item h6">Cras justo odio</li>
            </ul>
            <div className="card-body">
                <span className="h6">Next Session Date: 12</span>
            </div>
        </div>
    );
}

export default CourseCard;