import {useEffect,UseState} from 'react'
import UserCard from "./UserCard";
const Userlist =()=>{
    const [users, setusers] = useState([]);
    const [loading , setloading] = usestate (true)
    //create update read delate :post pull get delete

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()) //convert to json
         .then((data) =>{
              setUsers(data);
              setloading(false);}
         .then 
         (err) => console.error(err)
    )

    },[]);
    if (loading) {
        <Spinner animation="border"variant="danger"/>
    }
        return (

            <div style ={{ display: "flex", flexwrap:wrap,justifyContent:"center" }}>
            {users.map((user)=>(
<UserCard user={user}/>
            ))}
</div>
        );
            };
            
   export default Userlist;