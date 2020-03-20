import SearchActionTypes from './search-field.types';

const INITTIAL_STATE = {
    searchField: '',
    isPending: false,
    robots: [],
    error: ''
};


export const searchFieldReducer = (state = INITTIAL_STATE, action) => {
    switch (action.type) {
        case SearchActionTypes.CHANGE_SEARCH_FIELD:
            return {
               ...state,
                 searchField: action.payload
            }
            default:
                return state;
    }
}

export const requestRobotsReducer = ( state = INITTIAL_STATE, action ) => {
    switch (action.type) {
        case SearchActionTypes.REQUEST_ROBOTS_PENDING :
            return {
                ...state,
                isPending: true

            }
        case SearchActionTypes.REQUEST_ROBOTS_SUCCESS :
            return {
                ...state,
                robots: action.payload,
                isPending: false
            }
        case SearchActionTypes.REQUEST_ROBOTS_FAILED :
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default: 
            return state
    }

}


// export default searchFieldReducer;