import Home from './Home'
import About from './About'
import Contact from './Contact'
import Admin from './Admin'
import Register from './Register'
import Form1 from './Form1'
import Redux from './Redux'
import User from './User'
import FruitArray from './FruitArray'
import DryFruitArray from './DryFruitArray'
import VegetableArray from './VegetableArray'
import Cart from './Cart'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>React NavBar</h1>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/admin/1'>Admin1</Link></li>
          <li><Link to='/admin/2'>Admin2</Link></li>
          <li><Link to='/admin/3'>Admin3</Link></li>
          <li><Link to='/admin/4'>Admin4</Link></li>
          <li><Link to='/admin/5'>Admin5</Link></li>
          <li><Link to = '/form'>Register</Link></li>
          <li><Link to = '/redux'>ReduxForm</Link></li>
          <li><Link to = '/user'>User</Link></li>
          <li><Link to = '/fruits'>Fruits</Link></li>
          <li><Link to = '/dryfruits'>DryFruits</Link></li>
          <li><Link to = '/vegetables'>Vegetables</Link></li>
          <li><Link to = '/cart'>Cart</Link></li>

        </ul>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/contact" element = {<Contact/>}></Route>
          <Route path = "/admin">
          <Route path = ":id1" element = {<Admin/>}></Route>
          <Route path = ":id2" element = {<Admin/>}></Route>
          <Route path = ":id3" element = {<Admin/>}></Route>
          <Route path = ":id4" element = {<Admin/>}></Route>
          <Route path = ":id5" element = {<Admin/>}></Route>
          </Route>  
          <Route path="/register" element = {<Register/>}></Route>
          <Route path="/form" element = {<Form1/>}></Route>
          <Route path="/redux" element = {<Redux/>}></Route>
          <Route path="*" element = {<b>ERR:404! PAGE NOT FOUND!!!</b>}></Route>
          <Route path="/user" element = {<User/>}></Route>
          <Route path="/fruits" element = {<FruitArray/>}></Route>
          <Route path="/dryfruits" element = {<DryFruitArray/>}></Route>
          <Route path="/vegetables" element = {<VegetableArray/>}></Route>
          <Route path="/cart" element = {<Cart/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
