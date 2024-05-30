import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from'../src/Components/Navbar';
import About from '../src/Components/About'
import Contact from './Components/Contact';
import Service from './Components/Service';
import Jewels from './Components/Jewels';
import Product from './Components/Product';



function App(){


  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Jewels' element={<Jewels/>}/>
        <Route path='/product/:id' element={<Product/>}/>


        
       
         
        </Routes>
        
      </Router>
    </div>
  );
}
export default App;

