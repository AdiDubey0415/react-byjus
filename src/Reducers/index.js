import { combineReducers } from 'redux';
import CoursesReduces from './reducer_courses';

// const state = () => ({
//     courseList: [{title: 'shri'}],
//     searchedTerms: [], 
// })

const reducers = combineReducers({
    courses: CoursesReduces
});

export default reducers;