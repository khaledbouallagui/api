import react from "react";
import { Card, Button } from "react-bootstrap";
import { link } from "react-router-dom";
const userCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <span className="profil">{user.name[0]}</span>

        <Card.Body>
          <Card.Title>user.name</Card.Title>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <link to={"/profil/${user.id}"}>
            <Button variant="danger">see profile</Button>
          </link>
        </Card.Body>
      </Card>
    </div>
  );
};
