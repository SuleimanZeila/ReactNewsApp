import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

const CreatePost = () => {
  const current_user = localStorage.getItem('username')

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [backMessage, setBackMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: Submit form data to server
    fetch("http://localhost:3000/newpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content,category,date,author,description }),
  })
    .then((response) => response.json())
    .then((data) => {
      setBackMessage(data.user);
      localStorage.setItem("successMessageForPost", 'Your Have Successfully Posted New Content.');
      const newtitle = title.replace(/\s+/g, '');
      const newauthor = author.replace(/\s+/g, '');
      localStorage.setItem("imageId", (newtitle+'-'+ newauthor));
      window.location.href = "/upload";
      console.log("Server response:", data);
      // TODO: Handle response from server
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
  }
  return (
    <>
    {current_user ? (
    <>
    <div className='mx-auto flex justify-center mt-5'>
        
        <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className='mb-5 text-2xl text-center text-blue-500 font-bold' >Create A New Post</h1>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Title
            </label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Title"  />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Description
            </label>
            <input maxLength={200} type="text" value={description} onChange={(event) => setDescription(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Description for your Article in 200 characters"  />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Content
            </label>
            <textarea rows="4" cols="50" value={content} onChange={(event) => setContent(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Content"  />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Category
            </label>
            <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Category"  />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Date
            </label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Date"  />
            </div>
            <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Author
      </label>
      
      <input value={author} onChange={(event) => setAuthor(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Author" />
      
    </div>
    <div className="flex items-center justify-between">
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"/>
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/allpost">
        Go To All Post
      </Link>
    </div>
            </form>
            <div>
            {(typeof backMessage === 'undefined') ? (
        <p>Loading...</p>
      ):(
        <p>{ backMessage.username}</p>
        )
      }
            </div>
            <p className="text-center text-gray-500 text-xs">
    &copy;2023 Jabir. All rights reserved.
  </p>
    </div>
    </div>
    </>
    ):(<>
      <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">You have not logged in!!</p>

      </>)}
    </>
    
    
  )
}

export default CreatePost