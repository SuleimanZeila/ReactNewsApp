import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
const SpecificPost = ({ id }) => {
  const [post, setPost] = useState(null);
  const { id: idFromUrl } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${idFromUrl}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [idFromUrl]);

  if (!post) {
    return <div>Loading...</div>;
  }
  const date = new Date(post.date);
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;


  return (

    <div className='flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6'>
    <div className='flex flex-wrap items-center justify-between mb-8'>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      to={'/allposts'}
                    >
                      Go Back To All Posts</Link>
      <dir className='flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text'>
        <h1 className='mr-10 font-bold leading-none md:text-3xl'><u>{post.title}</u></h1><br />
      <Image className='object-center justify-center' title={post.title.replace(/\s+/g, '')} author={post.author.replace(/\s+/g, '')} />
      <h1 className='mr-10 font-bold leading-none md:text-2xl'>Published by <strong>{post.author}</strong> On <strong>{formattedDate}</strong></h1>
      <br />
      <p>{post.content}</p>
      </dir>
    </div></div>
  );
};

export default SpecificPost;
