import React, { useState } from 'react';
import Button from './Button';

const Ad = (props) => {

  const [title, setTitle] = useState(props.message);
  const onChangeTitle = (ev) => setTitle(ev.target.value);

  const [description, setDescription] = useState(props.desc);
  const onChangeDescription = (ev) => setDescription(ev.target.value);

  const [isFavorite, setIsFavorite] = useState(props.isFav);
  const onFavorite = () => setIsFavorite(!isFavorite);

  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <p><input type="text" onChange={onChangeTitle} value={title} /></p>
      <p><input type="text" onChange={onChangeDescription} value={description} /></p>
      <p><label><input onChange={onFavorite} className='card-input' type="checkbox" checked={isFavorite} />Favourite</label></p>
      <Button name="Sent query" />
    </article>

    // onChange=(ev) => setTitle(ev.target.value)
  )
};

export default Ad;