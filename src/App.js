import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';






class App extends Component {
   constructor(){
       super() // must call super in order to call this.state
    this.state = {
        robots: [], // robots is a state
        searchfield: '' // searchfield is also a state.  State is passed down from parent to child by passing state as props to the child components
        
       }
   }

   componentDidMount() { // invoked when a component is initialized. Good place for network requests.
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response =>  response.json())
       .then((data) => {
           this.setState({robots:data})
       })
       .catch(console.log('errror'))
   }

   onSearchChange = (event) => { // arrow syntax ensures that the *this* value comes from where it originated(searchbox component in this case)
     // gives the value of the searchbox
     this.setState({searchfield: event.target.value}) // .target.value is used because we are working with an object.
    // searchfield is one state
   }
   
    render() {
     const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })   // 

        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading........</h1>
        } else {
    return ( // must use *this*  because we are working with an object. 
        <div className='tc'>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} /> 
            </Scroll>
            
        </div>
    ); // filteredRobots is passed as a prop to CardList to communicate between the components.
    }   
}
}

export default App;