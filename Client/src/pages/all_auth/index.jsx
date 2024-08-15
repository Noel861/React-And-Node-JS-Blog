import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Pfp2 from '../../assets/pfp2.png'
import Card1 from '../../assets/post1.png'
import axios from 'axios';
import { apiUrl } from '../../utils';

const AllAuth = () => {

    const [userData, setUserData] = useState([])

    useEffect(()=>{

        axios.get(`${apiUrl}getUsers`)
        .then(function (response) {
            setUserData(response.data)
          })
          .catch(function (error) {
           
            console.log(error);
          })
          .finally(function () {
            
          });
        
    },[])
    console.log("Data in Users", userData)

  return (
    <div className='flex'>

        <div className='Auth'><h1>All Authors</h1></div>

         <div>
            {userData?.map((item, index)=>{
                return(
                    <div key={index} className='flex1'>
                        <div className='name'><p>Name : {item?.name}</p></div>
                        <div className='email'><p>Email : {item?.email}</p></div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AllAuth