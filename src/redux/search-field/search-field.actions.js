import SearchActionTypes from './search-field.types';

export const setSearchField = text => ({
    type: SearchActionTypes.CHANGE_SEARCH_FIELD,
    payload: text
});


// async robots request action 
//higher order function 'function that returns a function'
//provides dispatch function to the second layer function so it can be used throughout.
export const requestRobots = () => dispatch => {
    dispatch({
        type: SearchActionTypes.REQUEST_ROBOTS_PENDING
    });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then((data) => dispatch({
        type: SearchActionTypes.REQUEST_ROBOTS_SUCCESS,
        payload: data
    }))
    .catch(err => dispatch({
        type: SearchActionTypes.REQUEST_ROBOTS_FAILED,
        payload: err
    }))
}