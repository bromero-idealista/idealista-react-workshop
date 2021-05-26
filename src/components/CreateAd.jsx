import React, { useState } from 'react';
import Button from './Button';

const CreateAd = ({ onCreatedAd }) => {

  const [title, setTitle] = useState('');
  const onChangeTitle = (ev) => setTitle(ev.target.value);

  const [description, setDescription] = useState('');
  const onChangeDescription = (ev) => setDescription(ev.target.value);

  const [isFavorite, setIsFavorite] = useState(false);
  const onFavorite = () => setIsFavorite(!isFavorite);

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    onCreatedAd({
      title,
      description,
      isFavorite
    });
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <p><input type="text" placeholder="title" onChange={onChangeTitle} value={title} /></p>
        <p><input type="text" placeholder="description" onChange={onChangeDescription} value={description} /></p>
        <p><label><input onChange={onFavorite} className='card-input' type="checkbox" checked={isFavorite} />Favourite</label></p>
        <input type="submit" />
      </form>
    </section>
  );

  // onChange=(ev) => setTitle(ev.target.value)
};

export default CreateAd;