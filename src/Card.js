import React from 'react';

const Card = ({ name, email, id}) => { //This is using destructuring to destructure props. I need to learn destructuring.
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> {/*This URL uses back ticks. I need to learn this. Note the weird way you have to comment JSX.*/}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;