import { combineReducers } from 'redux';

import {searchFieldReducer, requestRobotsReducer} from './search-field/search-field.reducer';

const rootReducer = combineReducers({
    searchField: searchFieldReducer,
    requestRobots: requestRobotsReducer

});

export default rootReducer;