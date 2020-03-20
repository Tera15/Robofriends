import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

import { connect } from 'react-redux';

import { setSearchField, requestRobots } from './redux/search-field/search-field.actions';






class App extends Component {
   

   componentDidMount() { // invoked when a component is initialized. Good place for network requests.
    const {onRequestRobots} = this.props
    onRequestRobots()
   }

   
   
    render() {

        //searchField, and onSearchChange come from props provided by redux functions
        //props are provided by mapStateToProps and mapDispatchToProps
        const { searchField, onSearchChange, robots, isPending } = this.props;
     const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })    

        if (isPending) {
            return <h1 className='tc'>Loading........</h1>
        } else {
    return (  
        <div className='tc'>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} /> 
            </Scroll>
            
        </div>
    ); // filteredRobots is passed as a prop to CardList to communicate between the components.
    }   
}
}

const mapStateToProps = state => {
    // searchField comes from comes from rootReducer and searchField.searchField
    // come from taking searchFieldReducer.searchField
    // searchFieldReducer is passed into rootReducer as property of searchField hence
    // searchField.SearchField  
    return {
        searchField: state.searchField.searchField,
        robots:  state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = dispatch => {
    // setSearchField from 'search-field.actions.js' is passed into dispatch.
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        //requestRobots comes from actions file.
        // using thunkMiddleware to aysnc requestRobots
        onRequestRobots: () => dispatch(requestRobots())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App); 