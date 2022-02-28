import React, {useState, useContext} from "react";
import { GlobalContext} from "../context/GlobalState";
import { Link } from "react-router-dom"; 
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

import{
    Form,
    FormGroup,
    Label,
    Input,
    Button
}from 'reactstrap';

export const AddUser = () =>{
    const [name, setName] = useState('');
    const { addUser} = useContext(GlobalContext);
    const navigate = useNavigate();
   

    const onSubmit = () => {
        navigate("/");
        const newUser ={
            id:4,
            name
        }
      addUser(newUser);
      navigate.push("/");
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (
       <Form onSubmit={onSubmit}>
           <FormGroup>
              <Label>Name</Label>
               <Input type="text"  value={name} onChange={onChange} placeholder="Enter Name"></Input>
           </FormGroup>
           <Button type="submit">Submit</Button>
           <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
       </Form>
    )
}