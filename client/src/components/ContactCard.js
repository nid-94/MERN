import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletContact } from "./../redux/actions/contact";
function ContactCard({ lista }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>name : {lista.name}</Card.Title>
                    <Card.Text>email : {lista.email}</Card.Text>
                    <Card.Text>phone : {lista.phone}</Card.Text>

                    <Button variant="primary" onClick={() => dispatch(deletContact(lista._id))}>
                        efsa5ny
                    </Button>
                    <Button variant="primary" onClick={() => navigate(`/edit/${lista._id}`)}>
                        edit
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContactCard;
