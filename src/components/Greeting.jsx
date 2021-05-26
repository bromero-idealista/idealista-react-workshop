import React from 'react';

const Greeting = ({ message = ''} = {}) => {
    return <h1>{message}</h1>;
};

export default Greeting;