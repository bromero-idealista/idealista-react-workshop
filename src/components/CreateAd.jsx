import React, { useState } from 'react';
import Button from './Button';

const CreateAd = (props) => {

  const [title, setTitle] = useState('');
  const onChangeTitle = (ev) => setTitle(ev.target.value);

  const [description, setDescription] = useState('');
  const onChangeDescription = (ev) => setDescription(ev.target.value);

  const [isFavorite, setIsFavorite] = useState(false);
  const onFavorite = () => setIsFavorite(!isFavorite);

  return (
    <section>
      <form>
        <p><input type="text" placeholder="title" onChange={onChangeTitle} value={title} /></p>
        <div>{title}</div>
        <p><input type="text" placeholder="description" onChange={onChangeDescription} value={description} /></p>
        <p><label><input onChange={onFavorite} className='card-input' type="checkbox" checked={isFavorite} />Favourite</label></p>
        <Button name="Sent query" />
      </form>
    </section>
  );

  // onChange=(ev) => setTitle(ev.target.value)
};

export default CreateAd;