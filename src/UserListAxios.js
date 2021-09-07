import axios from "axios";
import {useEffect,useState} from "react";
import {spinner} from "react-bootstrap";
import userCard from"./UserCard";
const UserListAxios =()=>{
const [users, setUsers] =usestate ([]);
const [loading, setloading]=usestate (true);
useEffect(()=>{
   // axios.get("https://jsonplaceholder.typicode.com/users")
    //.then((res) => res.data) 
     //.then((el) => {setUsers(el);
     //setloading(false);})
     const fetchUser=async()=>{
try{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/${match.params.id}'
    );
     setUsers (data);
     setloading(false);
}
catch (error){

console.error(error);
}
};

fetchUsers();
},[]);
if (loading){
    return<spinner animation="border"variant="danger"/>;
}
return(
< style={{ display:"flex", flexWrap,justifyContent:"center"}}>
{users.map((user)=>(
    <userCard user={user}/>
))}
</div>

);
};

export default UserListAxios;

