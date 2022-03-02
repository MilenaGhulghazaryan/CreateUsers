import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import { GlobalProvider} from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GlobalProvider>
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element = {<Home/>}/>
           <Route path="/add" element = {<AddUser/>}/>
           <Route path="/edit/:id" element = {<EditUser/>}/>
        </Routes>
     </BrowserRouter>
     </GlobalProvider>
    </div>
  );
}

export default App;
