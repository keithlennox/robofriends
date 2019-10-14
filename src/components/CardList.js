import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { //This is using destructuring to destructure props. I need to learn destructuring.
    // if (true) { //Use this to test ErrorBoundry
    //     throw new Error('Nooooooooo!');
    // }
    return (
        <div>
            {
               robots.map((user, i) => { //map loops through robots object and returns a new array
                    return  (<Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    )
                })  
            }
        </div>
    );
}

export default CardList;