import React, { useState } from 'react';

const Ad = ({id = -1,  title = '', description = '', isFav = false, onFavorited = () => null}) => {

  const onFavorite = () => onFavorited(id);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p><label><input onChange={onFavorite} className='card-input' type="checkbox" checked={isFav} />Favourite</label></p>
    </div>
  )
};

export default Ad;