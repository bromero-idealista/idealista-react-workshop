import React, { useState } from 'react';

const Ad = ({ id = -1, title = '', description = '', isFav = false, onFavorited = () => null, onDiscarded = () => null }) => {

  const onFavorite = () => onFavorited(id);
  const onDiscard = () => onDiscarded(id);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p><label><input onChange={onFavorite} className='card-input' type="checkbox" checked={isFav} />Favourite</label></p>
      <button onClick={onDiscard}>Discard</button>
    </div>
  )
};

export default Ad;