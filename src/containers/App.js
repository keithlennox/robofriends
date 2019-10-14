import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '' //The search field is initially blank
        }
    }

    //Load user data from third party API
    componentDidMount() { //This is part of React Lifecycle, need to learn that
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ robots: users})});
    }

    //Function that fires whenever there is a change in the search form field
    onSearchChange = (event) => { //The event object is passed to this function
        this.setState({searchfield: event.target.value }) //The value typed into the search field is retrieved from the event object and used to update the state searchfield using setState.
    }

    //
    render() {
        const { robots, searchfield } = this.state; //This is getting robots and searchfield from props by using destructuring.
        const filteredRobots = robots.filter(robot => { //Built in javascript filter method is applied to the robots object, it takes one argument which is an arrow function.
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //The arrow function returns any names in the robots object that contain the value typed in the search field.
        }) 
        return !robots.length ? //This is using ternary to do an if else statement. If there are no users returned yet from the APi call, display loading..., else dispaly the users. "!robots.length" is the same as "robots.length ==== 0".
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1> {/*className uses tachyons*/}
                    <SearchBox searchChange={this.onSearchChange}/> {/*onSearchChange function is passed as a prop to the SeachBox component*/}
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }

export default App;