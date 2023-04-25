import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullName] = useState("");
  const [backMessage, setBackMessage] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: Submit form data to server
    fetch("http://localhost:3000/newuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password,phone,email,fullname }),
  })
    .then((response) => response.json())
    .then((data) => {
      setBackMessage(data.user);
      localStorage.setItem("successMessage", 'Your Have Successfully Registered. Kindly Login!');
      window.location.href = "/";
      console.log("Server response:", data);
      // TODO: Handle response from server
    })
    .catch((error) => {
      setErrorDisplay('There is an Error. Try again Later!!!')
      console.error("Error logging in:", error);
    });
  }
  return (
    <div className='mx-auto flex justify-center mt-20'>
        
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method='post' onSubmit={handleSubmit}>
        <h1 className='mb-10 text-2xl text-blue-500 font-bold text-sm' >Please Register With Us!</h1>
        {errorDisplay ?(errorDisplay):('')}
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Full Name
            </label>
            <input type="text" value={fullname} onChange={(event) => setFullName(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Full Name"  />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Email
            </label>
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Email"  />
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Phone Number
            </label>
            <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Phone Number"  />
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
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/signin">
        Login
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

export default Register