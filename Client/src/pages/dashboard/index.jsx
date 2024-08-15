import React, {useEffect, useState} from 'react'

const Dashboard = () => {
    let lastname = JSON.parse(localStorage.getItem('user_data'));
  return (
    <div>
        <div className="container">
                <div className="image-container">
                
                <div className='overlay-text'>
                <h1>Welcome {lastname.name} To My First React Js Blog Website!!!</h1>
                <h2>Your Info:</h2>
                <h3>Name : {lastname.name}</h3>
                <h3>email : {lastname.email}</h3>
                <h3>password : {lastname.password}</h3>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard