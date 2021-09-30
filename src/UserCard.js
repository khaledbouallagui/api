import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserCard = ({el }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <span className="profil">{el.name[0]}</span>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
        <p>{el.username}</p>
          <p>{el.email}</p>
          <Link to={`/profil/${el.id}`}>
            <Button variant="danger">see profile</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default UserCard