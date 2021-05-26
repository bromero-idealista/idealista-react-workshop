import React, { useState } from 'react';

const Ad = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
};

export default Ad;