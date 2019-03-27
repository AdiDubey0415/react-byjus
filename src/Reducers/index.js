import { combineReducers } from 'redux';
import CoursesReduces from './reducer_courses';
import axios from 'axios'

const data = () => axios.get('https://api.myjson.com/bins/1fq8pm');
data()
.then(res=>{
    console.log(res)
});
.catch();

const reducers = combineReducers({
    courses: CoursesReduces
});

export default reducers;