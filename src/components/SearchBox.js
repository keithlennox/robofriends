import React from 'react';

const SearchBox = ({ searchChange }) => { //The onSearchChange function is retrieved from the props object using destructuring
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' //These are tachyons package values
                type='search' 
                placeholder='search robots' 
                onChange={searchChange} //The onSearchChange function is used as the value for the HTML onChange event handler
            />
        </div>
    )
}

export default SearchBox;