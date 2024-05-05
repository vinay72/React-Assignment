// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // Import `thunk` instead of `thunkMiddleware`
import jobsReducer from './reducers';

const store = createStore(jobsReducer, applyMiddleware());

export default store;
