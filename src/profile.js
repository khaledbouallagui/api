import userEvent from "@testing-library/user-event";
import { useEffect,useState } from "react";
import { Card, Spinner } from "react-bootstrap";
const profile=({match})=>{
    useEffect(() => {
        const [ profile, setprofile]=useState(true);
        useEffect(()=>{
            const fetchprofile=async()=>{

            try {
                const {data}=await axios.get(

'https://jsonplaceholder.typicode.com/users${match.params.id}'
);
setprofile(data);
setIsLoading(false);
                }
                catch (error){
                    console.error(error);
                }
            };
            fetchprofile();
        },[match]);
        if (isloading){
return <Spinner animation ="border" variant="danger"/>;
        }
    return <div>

    <Card style={{widht:'18rem'}}>
    <span> {profile.name[0]}</span>
    <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <link to={"/profile/${user.id}"}>
            <Button variant="primary">Go Back</Button>
          </link>
        </Card.Body>
      </Card>
    </div>;
  );
export default profile;