import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'
import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])
    const getUsers=async()=>{
        try {
            const response=await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)  
        } catch (error) {
            console.log(error)
        }
        }

    useEffect(() => {
getUsers() 
    }, [])

    return (
        <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
            {users.map(el=><User key={el.id} el={el}/>)}
        </div>
    )
}

export default UserList