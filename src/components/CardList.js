import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { //This is using destructuring to destructure props. I need to learn destructuring.

    //Use this to test ErrorBoundry
    // if (true) { 
    //     throw new Error('No!');
    // }

    return (
        <div>
            {
               robots.map((robot, i) => { //map() loops through robots object and returns a new array, 2nd param i is the array index
                    return  (
                        <Card 
                            key={i} //It's important to provide a key!
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                        />
                    )
                })  
            }
        </div>
    );
}

export default CardList;