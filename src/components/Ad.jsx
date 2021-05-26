import React from 'react';

const Ad = ({ title = '', description = '', isFav = false } = {}) => {
    return (
        <article className={`card-container ${isFav ? 'fav' : ''}`}>
            <figure className='card-figure'>
                <img src="" />
            </figure>
                
            <div className='card-box'>
                <h2 className='card-h2'>{title}</h2>
                <p className='card-text'>{description}</p>
                <div className='card-actions'>
                    <label className='card-label'>
                        <input className='card-input' type="checkbox" checked={isFav} />
                        <span className='card-checkbox'>
                            <span className='card-favorite'>Favorite?</span>
                        </span>
                    </label>
                    <button>Discard</button>
                </div> 
            </div>
        </article>
    );
};

export default Ad;