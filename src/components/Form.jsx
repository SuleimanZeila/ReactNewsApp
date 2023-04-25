import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [backMessage, setBackMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: Submit form data to server
    fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      setBackMessage(data.user);
      localStorage.setItem("username", data.user.username);
      window.location.href = "/allposts";
      console.log("Server response:", data);
      // TODO: Handle response from server
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
  }
  return (
    <div className='mx-auto flex justify-center mt-20'>
        
        <div className="w-full max-w-xs">
        <form method='post' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className='mb-10 text-2xl text-blue-500 font-bold text-sm' >Please Login</h1>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username"  />
            </div>
            <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input value={password} onChange={(event) => setPassword(event.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"/>
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
        Register
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
  )
}

export default Form