import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots }  from './robots'; //This is using destructuring to destructure props. I need to learn destructuring.

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange()
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={this.state.robots}/>
            </div>
        )
    }
}

export default App;