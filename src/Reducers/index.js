import { combineReducers } from 'redux';

const state = () => ({
    title: 'New project'
})

const reducers = combineReducers({
    state
});

export default reducers;