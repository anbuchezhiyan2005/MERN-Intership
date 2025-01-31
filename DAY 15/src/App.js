import React from 'react';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
//import './App.css';

function App() {
  return (
   <BrowserRouter>
     <ul>
      <li>
        <Link to="/add">Add Employee</Link>
      </li>
     </ul>

     <Routes>
      <Route path="/add" element={<EmployeeList/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
