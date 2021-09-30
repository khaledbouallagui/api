import React  from 'react'
import {useEffect,useState} from 'react'
import { Spinner } from 'react-bootstrap';
import UserCard from "./UserCard";
import axios from 'axios';
const UserListAxios = () => {
    const [users, setUsers] =useState([]);
    const [loading, setloading]=useState (true);
    useEffect(()=>{
       // axios.get("https://jsonplaceholder.typicode.com/users")
        //.then((res) => res.data) 
         //.then((el) => {setUsers(el);
         //setloading(false);})
         const fetchUser=async()=>{
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
         setUsers (data);
         setloading(false);
    }
    catch (error){
    
    console.error(error);
    }
    };
    
    fetchUser();
    },[]);
    if (loading){
        return <Spinner animation="border"variant="danger"/>;
    };
    return(
        <div style ={{ display: "flex", flexwrap:"wrap",justifyContent:"center" }}>
        {users.map((user)=>(
    <UserCard user={user}/>
        ))}
    </div>
    
    );
    };

export default UserListAxios


