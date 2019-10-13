import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots }  from './robots'; //This is using destructuring to destructure props. I need to learn destructuring.

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '' //The search field is initially blank
        }
    }

    //Function that fires whenever there is a chnage in the search form field
    onSearchChange = (event) => { //The event object is passed to this function
        this.setState({searchfield: event.target.value }) //The value typed into the search field is retrieved from the event object and used to update the state searchfield using setState.
    }

    //
    render() {
        const filteredRobots = this.state.robots.filter(robots => { //Built in javascript filter method is applied to the robots object, it takes one argument which is an arrow function.
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //The arrow function returns any names in the robots object that contain the value typed in the search field.
        }) 
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> {/*onSearchChange function is passed as a prop to the SeachBox component*/}
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;