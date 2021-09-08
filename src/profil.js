import userEvent from "@testing-library/user-event";
import { useEffect,useState } from "react";
import { Card, Spinner } from "react-bootstrap";
const profil=({match})=>{
    useEffect(() => {
        const [ profil, setprofile]=useState(true);
        useEffect(()=>{
            const fetchprofil=async()=>{

            try {
                const {data}=await axios.get(

'https://jsonplaceholder.typicode.com/users${match.params.id}'
);
setprofil(data);
setIsLoading(false);
                }
                catch (error){
                    console.error(error);
                }
            };
            fetchprofil();
        },[match]);
        if (isloading){
return <Spinner animation ="border" variant="danger"/>;
        }
    return <div>

    <Card style={{widht:'18rem'}}>
    <span> {profil.name[0]}</span>
    <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <p>{profil.name}</p>
          <p>{profil.email}</p>
          <link to={"/profil/${user.id}"}>
            <Button variant="primary">Go Back</Button>
          </link>
        </Card.Body>
      </Card>
    </div>;
  );
export default profil;