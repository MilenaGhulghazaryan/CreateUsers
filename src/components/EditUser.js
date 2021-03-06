import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";

import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    
  })
  

  const currentUserId = props.match.params.id;
  const navigate = useNavigate();
  
 
  

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === Number(userId));
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" value={selectedUser.name} onChange={onChange}  placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit" >Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}

