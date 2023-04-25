import React from 'react'

const Dashboard = () => {
  const username = localStorage.getItem("username");
  
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <h1>Dashboard</h1>
      </div>
  )
}

export default Dashboard