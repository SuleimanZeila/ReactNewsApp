import React from 'react';

const Image = ({ title, author }) => {
  const imageUrl = `http://localhost:3000/images/${title}/${author}`;

  return <img className='imageSize' src={imageUrl} alt={`${title}-${author}`} />;
};

export default Image;
