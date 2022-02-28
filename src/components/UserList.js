import React,{useContext} from "react";
import { GlobalContext} from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
   ListGroup,
   ListGroupItem,
   Button
} from 'reactstrap';
import './UserList.css';
export const UserList = () =>{
    const {users, removeUser} = useContext(GlobalContext);
    return(
       <ListGroup className="mt-4">
           {users.map(user=>(
                <ListGroupItem className="d-flex">
                <strong>{user.name}</strong>
             <div className="ml-auto">
                <Link className="edit" to="/edit/1" to={`/edit/${user.id}`}>Edit</Link>
                <Button onClick={() => removeUser(user.id)} className="delete" color="danger" >Delete</Button>
             </div>
             </ListGroupItem>
    ))}
    </ListGroup>
   )
}

