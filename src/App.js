import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./navbar";
import Login from './Login';
import Register from './register';


function App() {
  return (
  <>
     <BrowserRouter>
      <Navbar/><div className='Container'>
       
       <Routes> 

        <Route exact path='/Login' element ={<Login/>}/>
        <Route exact path='/Register' element ={<Register/>}/>
       
        </Routes>
       </div>
    </BrowserRouter>
  
  </>
  );
}

export default App;
