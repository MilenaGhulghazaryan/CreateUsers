import React from "react";
import { Link } from "react-router-dom";
import './Heading.css';
import{
   Navbar,
   Nav,
   NavItem,
   NavbarBrand,
   Container
}from 'reactstrap';

export const Heading = () =>{
    return(
       <Navbar color="dark" dark>
           <Container>
               <NavbarBrand href="/">Users</NavbarBrand>
               <Nav>
                   <NavItem>
                       <Link className="addbtn" to ="add" >Add User</Link>
                   </NavItem>
               </Nav>
           </Container>
       </Navbar>
    )
}