import { useEffect, useState } from "react";
import React from "react"; 

const About = () => {
  const [backEndUsers,setBackEndUsers] = useState([{}])
  useEffect(()=>{
    fetch('http://localhost:3000/allusers').then(
      response => response.json()
    ).then(
      data => {
        setBackEndUsers(data)
      }
    )
  },[])
    return <div>
      {(typeof backEndUsers === 'undefined') ? (
        <p>Loading...</p>
      ):(
        backEndUsers.map((user , i) => (
          <div>
          <h1 className="text-2xl">Username: { user.username} </h1>
          <p className="text-2xl">Password: { user.password} </p>
          <p key={i}>Email: {user.email},  </p>
          <br /><br />
          </div>
        ))
      )}
      
    </div>;
  };
  
  export default About;